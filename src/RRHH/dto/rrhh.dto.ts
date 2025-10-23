import { IsNumber, IsString, IsArray, IsOptional } from 'class-validator';

export class AsignarRolDto {
    @IsNumber()
    id_empleado: number;

    @IsNumber()
    id_rol: number;
}

export class FiltroEmpleadosDto {
    @IsOptional()
    @IsString()
    busqueda?: string;

    @IsOptional()
    @IsString()
    estado?: string;

    @IsOptional()
    @IsNumber()
    id_departamento?: number;

    @IsOptional()
    @IsString()
    rol?: string;
}

export class UpdateEmpleadoDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsString()
    apellido?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    telefono?: string;

    @IsOptional()
    @IsString()
    rol?: string;

    @IsOptional()
    @IsNumber()
    id_departamento?: number;
}

export class BajaEmpleadoDto {
    @IsString()
    motivo: string;
}