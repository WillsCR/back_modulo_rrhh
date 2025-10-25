
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpleadoDto } from './dto/empleado.dto';
import { Prisma } from '../../generated/rrhh';
import { FiltroEmpleadosDto, UpdateEmpleadoDto } from './dto/rrhh.dto';

@Injectable()
export class EmpleadoService {
  constructor(private prisma: PrismaService) {}

  private async checkEmpleadoExists(id: number) {
    const empleado = await this.prisma.empleado.findUnique({
      where: { id_empleado: id }
    });
    if (!empleado) {
      throw new NotFoundException(`Empleado #${id} no encontrado`);
    }
    return empleado;
  }

  async createEmpleado(data: CreateEmpleadoDto) {
    const exists = await this.prisma.empleado.findUnique({
      where: { rut: data.rut },
    });

    if (exists) {
      throw new BadRequestException('El RUT ya está registrado.');
    }

    const empleadoData: Prisma.empleadoCreateInput = {
      nombre: data.nombre,
      apellido: data.apellido,
      rut: data.rut,
      rol: data.rol,
      email: data.email,
      telefono: data.telefono,
      fecha_ingreso: new Date(data.fecha_ingreso),
      estado: 'ACTIVO',
      departamento: {
        connect: { id_departamento: data.id_departamento }
      }
    };

      // Primero buscamos el rol que corresponde al empleado
      const rolAsignado = await this.prisma.rrhh_rol.findFirst({
        where: {
          nombre: data.rol
        }
      });

      if (!rolAsignado) {
        throw new BadRequestException(`El rol ${data.rol} no existe en el sistema`);
      }

      // Crear el empleado y asignar el rol en una transacción
      return this.prisma.$transaction(async (prisma) => {
        // Crear el empleado
        const nuevoEmpleado = await prisma.empleado.create({
          data: empleadoData,
        });

        // Asignar el rol
        await prisma.rrhh_empleado_rol.create({
          data: {
            id_empleado: nuevoEmpleado.id_empleado,
            id_rol: rolAsignado.id_rol
          }
        });

        return nuevoEmpleado;
      });
  }
  async listarEmpleados(filtro?: string) {
    const where: Prisma.empleadoWhereInput = filtro ? {
      OR: [
        { nombre: { contains: filtro, mode: 'insensitive' } },
        { apellido: { contains: filtro, mode: 'insensitive' } },
        { rut: { contains: filtro, mode: 'insensitive' } },
        { email: { contains: filtro, mode: 'insensitive' } },
      ]
    } : {};

    return this.prisma.empleado.findMany({
      where,
      select: {
        id_empleado: true,
        nombre: true,
        apellido: true,
        rol: true,
        email: true,
        estado: true,
        roles: {
          select: {
            rol: { select: { nombre: true } },
          },
        },
        departamento: {
          select: {
            nombre: true
          }
        }
      },
    });  }
  async asignarRol(idEmpleado: number, idRol: number) {
    const empleado = await this.prisma.empleado.findUnique({
      where: { id_empleado: idEmpleado },
    });

    if (!empleado || empleado.estado !== 'ACTIVO') {
      throw new BadRequestException('Empleado no existe o está inactivo.');
    }

    const existe = await this.prisma.rrhh_empleado_rol.findUnique({
      where: {
        id_empleado_id_rol: {
          id_empleado: idEmpleado,
          id_rol: idRol,
        },
      },
    });

    if (existe) {
      throw new BadRequestException('El empleado ya tiene este rol.');
    }

    return this.prisma.rrhh_empleado_rol.create({
      data: {
        id_empleado: idEmpleado,
        id_rol: idRol,
      },
    });
  }
  async listarRoles() {
    return this.prisma.rrhh_rol.findMany();
  }

  async findOne(id: number) {
    const empleado = await this.prisma.empleado.findUnique({
      where: { id_empleado: id },
      include: {
        roles: {
          include: {
            rol: true
          }
        },
        departamento: true,
        ausencias: true
      }
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado #${id} no encontrado`);
    }

    return empleado;
  }

  async updateEmpleado(id: number, updateDto: UpdateEmpleadoDto) {
    await this.checkEmpleadoExists(id);

    const { id_departamento, ...rest } = updateDto;
    
    const data: Prisma.empleadoUpdateInput = {
      ...rest,
      ...(id_departamento && {
        departamento: {
          connect: { id_departamento }
        }
      })
    };

    return this.prisma.empleado.update({
      where: { id_empleado: id },
      data,
      include: {
        departamento: true,
        roles: {
          include: {
            rol: true
          }
        }
      }
    });
  }

  async darBajaEmpleado(id: number, motivo: string) {
    await this.checkEmpleadoExists(id);

    return this.prisma.empleado.update({
      where: { id_empleado: id },
      data: {
        estado: 'INACTIVO',
        fecha_baja: new Date(),
        motivo_baja: motivo
      }
    });
  }

  async removerRol(idEmpleado: number, idRol: number) {
    await this.checkEmpleadoExists(idEmpleado);

    const rolExistente = await this.prisma.rrhh_empleado_rol.findUnique({
      where: {
        id_empleado_id_rol: {
          id_empleado: idEmpleado,
          id_rol: idRol
        }
      }
    });

    if (!rolExistente) {
      throw new NotFoundException(`El empleado no tiene asignado el rol especificado`);
    }

    return this.prisma.rrhh_empleado_rol.delete({
      where: {
        id_empleado_id_rol: {
          id_empleado: idEmpleado,
          id_rol: idRol
        }
      }
    });
  }

  async listarEmpleadosPorDepartamento(id_departamento: number, filtro: FiltroEmpleadosDto) {
    return this.prisma.empleado.findMany({
      where: {
        id_departamento,
        ...(filtro.estado && { estado: filtro.estado }),
        ...(filtro.rol && { rol: filtro.rol }),
        ...(filtro.busqueda && {
          OR: [
            { nombre: { contains: filtro.busqueda, mode: 'insensitive' } },
            { apellido: { contains: filtro.busqueda, mode: 'insensitive' } },
            { email: { contains: filtro.busqueda, mode: 'insensitive' } },
          ]
        })
      },
      include: {
        roles: {
          include: {
            rol: true
          }
        },
        departamento: true
      }
    });
  }

  async obtenerEstadisticasPorDepartamento() {
    const empleados = await this.prisma.empleado.groupBy({
      by: ['id_departamento'],
      _count: {
        id_empleado: true
      }
    });

    const departamentos = await this.prisma.rrhh_departamento.findMany();
    
    return departamentos.map(dept => ({
      departamento: dept.nombre,
      cantidad: empleados.find(e => e.id_departamento === dept.id_departamento)?._count?.id_empleado || 0
    }));
  }
}
