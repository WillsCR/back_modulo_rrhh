import { IsNumber, IsDateString, IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateAusenciaDto {
    @IsNumber()
    id_empleado: number;

    @IsDateString()
    fecha_inicio: string;

    @IsDateString()
    fecha_fin: string;

    @IsString()
    @IsEnum(['VACACIONES', 'PERMISO', 'LICENCIA', 'OTRO'])
    tipo: string;

    @IsOptional()
    @IsString()
    motivo?: string;
}

export type EstadoAusencia = 'APROBADA' | 'RECHAZADA' | 'PENDIENTE' | 'CANCELADA';

export class UpdateAusenciaDto {
    @IsEnum(['APROBADA', 'RECHAZADA', 'PENDIENTE', 'CANCELADA'])
    estado: EstadoAusencia;

    @IsOptional()
    @IsString()
    motivo?: string;
}

export class FiltroAusenciasDto {
    @IsOptional()
    @IsNumber()
    id_empleado?: number;

    @IsOptional()
    @IsEnum(['APROBADA', 'RECHAZADA', 'PENDIENTE', 'CANCELADA'])
    estado?: EstadoAusencia;

    @IsOptional()
    @IsDateString()
    fecha_desde?: string;

    @IsOptional()
    @IsDateString()
    fecha_hasta?: string;
}