
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmpleadoDto, EmpleadoResponseDto } from './dto/empleado.dto';
import { Prisma } from '../../generated/rrhh';
import { FiltroEmpleadosDto, UpdateEmpleadoDto } from './dto/rrhh.dto';
import { CreateSolicitudBajaDto, UpdateSolicitudBajaDto } from './dto/baja-empleados.dto';

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

  async getEmpleadoByMail(email: string) {
    const empleado = await this.prisma.empleado.findUnique({
      where: { email },
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
      throw new NotFoundException(`Empleado con email ${email} no encontrado`);
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

  /**
   * Crear una nueva solicitud de baja
   */
  async crearSolicitudBaja(createSolicitudBajaDto: CreateSolicitudBajaDto) {
    const { id_empleado, motivo } = createSolicitudBajaDto;

    // Verificar que el empleado existe y está activo
    const empleado = await this.prisma.empleado.findUnique({
      where: { id_empleado }
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado #${id_empleado} no encontrado`);
    }

    if (empleado.estado !== 'ACTIVO') {
      throw new BadRequestException('Solo empleados activos pueden solicitar baja');
    }

    // Verificar si ya existe una solicitud pendiente
    const solicitudPendiente = await this.prisma.rrhh_solicitud_baja.findFirst({
      where: {
        id_empleado,
        estado: 'PENDIENTE'
      }
    });

    if (solicitudPendiente) {
      throw new BadRequestException('Ya existe una solicitud de baja pendiente para este empleado');
    }

    // Crear la solicitud de baja
    return this.prisma.rrhh_solicitud_baja.create({
      data: {
        id_empleado,
        motivo,
        estado: 'PENDIENTE',
        fecha_solicitud: new Date()
      },
      include: {
        empleado: {
          select: {
            nombre: true,
            apellido: true,
            rut: true,
            departamento: {
              select: {
                nombre: true
              }
            }
          }
        }
      }
    });
  }

  /**
   * Obtener todas las solicitudes de baja
   */
  async obtenerSolicitudesBaja(estado?: string) {
    const where = estado ? { estado } : {};

    return this.prisma.rrhh_solicitud_baja.findMany({
      where,
      include: {
        empleado: {
          select: {
            nombre: true,
            apellido: true,
            rut: true,
            email: true,
            fecha_ingreso: true,
            departamento: {
              select: {
                nombre: true
              }
            }
          }
        }
      },
      orderBy: {
        fecha_solicitud: 'desc'
      }
    });
  }

  /**
   * Obtener solicitudes de baja por empleado
   */
  async obtenerSolicitudesBajaPorEmpleado(id_empleado: number) {
    await this.checkEmpleadoExists(id_empleado);

    return this.prisma.rrhh_solicitud_baja.findMany({
      where: { id_empleado },
      include: {
        empleado: {
          select: {
            nombre: true,
            apellido: true,
            rut: true
          }
        }
      },
      orderBy: {
        fecha_solicitud: 'desc'
      }
    });
  }

  /**
   * Actualizar estado de una solicitud de baja
   */
  async actualizarSolicitudBaja(id_solicitud_baja: number, updateSolicitudBajaDto: UpdateSolicitudBajaDto) {
    const { estado, motivo_resolucion } = updateSolicitudBajaDto;

    // Verificar que la solicitud existe
    const solicitud = await this.prisma.rrhh_solicitud_baja.findUnique({
      where: { id_solicitud_baja },
      include: {
        empleado: true
      }
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud de baja #${id_solicitud_baja} no encontrada`);
    }

    if (solicitud.estado !== 'PENDIENTE') {
      throw new BadRequestException('Solo se pueden actualizar solicitudes pendientes');
    }

    // Usar transacción para actualizar solicitud y posiblemente dar de baja al empleado
    return this.prisma.$transaction(async (prisma) => {
      // Actualizar la solicitud
      const solicitudActualizada = await prisma.rrhh_solicitud_baja.update({
        where: { id_solicitud_baja },
        data: {
          estado,
          motivo_resolucion,
          fecha_resolucion: new Date()
        },
        include: {
          empleado: {
            select: {
              nombre: true,
              apellido: true,
              rut: true
            }
          }
        }
      });

      // Si la solicitud es aprobada, dar de baja al empleado
      if (estado === 'APROBADA') {
        await prisma.empleado.update({
          where: { id_empleado: solicitud.id_empleado },
          data: {
            estado: 'INACTIVO',
            fecha_baja: new Date(),
            motivo_baja: motivo_resolucion || 'Baja aprobada por solicitud'
          }
        });
      }

      return solicitudActualizada;
    });
  }

  /**
   * Obtener estadísticas de solicitudes de baja
   */
  async obtenerEstadisticasSolicitudesBaja() {
    const [total, pendientes, aprobadas, rechazadas] = await Promise.all([
      this.prisma.rrhh_solicitud_baja.count(),
      this.prisma.rrhh_solicitud_baja.count({ where: { estado: 'PENDIENTE' } }),
      this.prisma.rrhh_solicitud_baja.count({ where: { estado: 'APROBADA' } }),
      this.prisma.rrhh_solicitud_baja.count({ where: { estado: 'RECHAZADA' } })
    ]);

    return {
      total,
      pendientes,
      aprobadas,
      rechazadas
    };
  }

  /**
   * Cancelar una solicitud de baja pendiente
   */
  async cancelarSolicitudBaja(id_solicitud_baja: number) {
    const solicitud = await this.prisma.rrhh_solicitud_baja.findUnique({
      where: { id_solicitud_baja }
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud de baja #${id_solicitud_baja} no encontrada`);
    }

    if (solicitud.estado !== 'PENDIENTE') {
      throw new BadRequestException('Solo se pueden cancelar solicitudes pendientes');
    }

    return this.prisma.rrhh_solicitud_baja.update({
      where: { id_solicitud_baja },
      data: {
        estado: 'CANCELADA',
        fecha_resolucion: new Date(),
        motivo_resolucion: 'Cancelada por el solicitante'
      }
    });
  }
  async obtenerEmpleadosSinCuenta(): Promise<EmpleadoResponseDto[]> {
  const empleadosSinCuenta = await this.prisma.empleado.findMany({
    where: {
      usuario: null,
      estado: 'ACTIVO', 
    },
    select: {
      id_empleado: true,
      rut: true,
      nombre: true,
      apellido: true,
      email: true,
      rol: true,
      estado: true,
      departamento: {
        select: {
          nombre: true,
        },
      },
    },
  });

  return empleadosSinCuenta;
}
}
