import { IsString, IsNotEmpty, IsDateString, IsOptional, IsEmail, IsNumber } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio.' })
  apellido: string;

  @IsString()
  @IsNotEmpty({ message: 'El RUT es obligatorio.' })
  rut: string;

  @IsString()
  @IsNotEmpty({ message: 'El rol es obligatorio.' })
  rol: string;

  @IsEmail({}, { message: 'El email debe tener un formato válido.' })
  @IsNotEmpty({ message: 'El email es obligatorio.' })
  email: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsDateString({}, { message: 'La fecha de ingreso debe tener formato válido.' })
  fecha_ingreso: string;

  @IsNumber({}, { message: 'El ID del departamento debe ser un número.' })
  @IsNotEmpty({ message: 'El departamento es obligatorio.' })
  id_departamento: number;
}

export class BuscarEmpleadoDto {
  @IsOptional()
  @IsString({ message: 'El filtro debe ser un texto.' })
  busqueda?: string;
}

