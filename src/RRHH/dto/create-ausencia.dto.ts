import { IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateAusenciaDto {
  @IsInt()
  @IsNotEmpty({ message: 'El id del empleado es obligatorio.' })
  idEmpleado: number;

  @IsDateString({}, { message: 'La fecha de inicio debe tener formato válido.' })
  @IsNotEmpty({ message: 'La fecha de inicio es obligatoria.' })
  fechaInicio: string;

  @IsDateString({}, { message: 'La fecha de fin debe tener formato válido.' })
  @IsNotEmpty({ message: 'La fecha de fin es obligatoria.' })
  fechaFin: string;
}