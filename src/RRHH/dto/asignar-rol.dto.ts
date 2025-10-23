import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class AsignarRolDto {
  @IsInt()
  @Min(1)
  @IsNotEmpty({ message: 'El id del empleado es obligatorio.' })
  idEmpleado: number;

  @IsInt()
  @Min(1)
  @IsNotEmpty({ message: 'El id del rol es obligatorio.' })
  idRol: number;
}
