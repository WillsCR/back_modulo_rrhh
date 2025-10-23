import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from "../../generated/rrhh";
import { FiltroAusenciasDto } from './dto/ausencia.dto';

// ausencia.service.ts
@Injectable()
export class AusenciaService {
  constructor(private prisma: PrismaService) {}

  private async checkAusenciaExists(id: number) {
    const ausencia = await this.prisma.rrhh_ausencia.findUnique({
      where: { id_ausencia: id }
    });
    if (!ausencia) {
      throw new NotFoundException(`Ausencia #${id} no encontrada`);
    }
    return ausencia;
  }

  async solicitarAusencia(idEmpleado: number, inicio: Date, fin: Date, tipo: string = 'VACACIONES') {
    const solapada = await this.prisma.rrhh_ausencia.findFirst({
      where: {
        id_empleado: idEmpleado,
        OR: [
          { fecha_inicio: { lte: fin }, fecha_fin: { gte: inicio } },
        ],
      },
    });

    if (solapada) {
      throw new BadRequestException('El rango de fechas se solapa con otra ausencia.');
    }

    const data: Prisma.rrhh_ausenciaCreateInput = {
      tipo,
      fecha_inicio: inicio,
      fecha_fin: fin,
      estado: 'PENDIENTE',
      empleado: {
        connect: { id_empleado: idEmpleado }
      }
    };

    return this.prisma.rrhh_ausencia.create({ data });
  }

  async actualizarEstado(idAusencia: number, estado: 'APROBADA' | 'RECHAZADA' | 'PENDIENTE' | 'CANCELADA') {
    await this.checkAusenciaExists(idAusencia);
    
    return this.prisma.rrhh_ausencia.update({
      where: { id_ausencia: idAusencia },
      data: { estado },
    });
  }

  async findOne(id: number) {
    const ausencia = await this.prisma.rrhh_ausencia.findUnique({
      where: { id_ausencia: id },
      include: {
        empleado: true
      }
    });

    if (!ausencia) {
      throw new NotFoundException(`Ausencia #${id} no encontrada`);
    }

    return ausencia;
  }

  async listarAusencias(filtro: FiltroAusenciasDto) {
    const where: Prisma.rrhh_ausenciaWhereInput = {
      ...(filtro.id_empleado && { id_empleado: filtro.id_empleado }),
      ...(filtro.estado && { estado: filtro.estado }),
      ...(filtro.fecha_desde && filtro.fecha_hasta && {
        AND: [
          { fecha_inicio: { gte: new Date(filtro.fecha_desde) } },
          { fecha_fin: { lte: new Date(filtro.fecha_hasta) } }
        ]
      })
    };

    return this.prisma.rrhh_ausencia.findMany({
      where,
      include: {
        empleado: {
          select: {
            nombre: true,
            apellido: true,
            departamento: {
              select: { nombre: true }
            }
          }
        }
      },
      orderBy: { fecha_inicio: 'desc' }
    });
  }

  async listarAusenciasPorEmpleado(idEmpleado: number, filtro: FiltroAusenciasDto) {
    const where: Prisma.rrhh_ausenciaWhereInput = {
      id_empleado: idEmpleado,
      ...(filtro.estado && { estado: filtro.estado }),
      ...(filtro.fecha_desde && filtro.fecha_hasta && {
        AND: [
          { fecha_inicio: { gte: new Date(filtro.fecha_desde) } },
          { fecha_fin: { lte: new Date(filtro.fecha_hasta) } }
        ]
      })
    };

    return this.prisma.rrhh_ausencia.findMany({
      where,
      orderBy: { fecha_inicio: 'desc' }
    });
  }

  async obtenerEstadisticasPorMes(año: number) {
    const inicio = new Date(año, 0, 1);
    const fin = new Date(año, 11, 31);

    const ausencias = await this.prisma.rrhh_ausencia.findMany({
      where: {
        fecha_inicio: {
          gte: inicio,
          lte: fin
        },
        estado: 'APROBADA'
      }
    });

    const estadisticas = new Array(12).fill(0);
    ausencias.forEach(ausencia => {
      const mes = new Date(ausencia.fecha_inicio).getMonth();
      estadisticas[mes]++;
    });

    return estadisticas.map((cantidad, index) => ({
      mes: index + 1,
      cantidad
    }));
  }

  async obtenerEstadisticasPorTipo(filtro: FiltroAusenciasDto) {
    const where: Prisma.rrhh_ausenciaWhereInput = {
      estado: 'APROBADA',
      ...(filtro.fecha_desde && filtro.fecha_hasta && {
        AND: [
          { fecha_inicio: { gte: new Date(filtro.fecha_desde) } },
          { fecha_fin: { lte: new Date(filtro.fecha_hasta) } }
        ]
      })
    };

    const ausencias = await this.prisma.rrhh_ausencia.groupBy({
      by: ['tipo'],
      where,
      _count: {
        id_ausencia: true
      }
    });

    return ausencias.map(stats => ({
      tipo: stats.tipo,
      cantidad: stats._count.id_ausencia
    }));
  }
}
