import { IsString, IsNumber, IsOptional, IsIn, IsDateString, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSolicitudBajaDto {
  @IsNumber()
  @IsNotEmpty({ message: 'El ID del empleado es requerido' })
  @Type(() => Number)
  id_empleado: number;

  @IsString()
  @IsNotEmpty({ message: 'El motivo es requerido' })
  motivo: string;
}

export class UpdateSolicitudBajaDto {
  @IsString()
  @IsIn(['APROBADA', 'RECHAZADA'], { message: 'El estado debe ser APROBADA o RECHAZADA' })
  @IsNotEmpty({ message: 'El estado es requerido' })
  estado: 'APROBADA' | 'RECHAZADA';

  @IsString()
  @IsOptional()
  motivo_resolucion?: string;
}

export class SolicitudBajaQueryDto {
  @IsString()
  @IsIn(['PENDIENTE', 'APROBADA', 'RECHAZADA', 'CANCELADA'], { 
    message: 'El estado debe ser PENDIENTE, APROBADA, RECHAZADA o CANCELADA' 
  })
  @IsOptional()
  estado?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  id_empleado?: number;
}

export class SolicitudBajaResponseDto {
  id_solicitud_baja: number;
  id_empleado: number;
  fecha_solicitud: Date;
  motivo: string;
  estado: string;
  fecha_resolucion?: Date;
  motivo_resolucion?: string;
  empleado?: {
    nombre: string;
    apellido: string;
    rut: string;
    email?: string;
    fecha_ingreso?: Date;
    departamento?: {
      nombre: string;
    };
  };
}