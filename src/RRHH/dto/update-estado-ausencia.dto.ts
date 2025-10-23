import { IsString, IsIn, IsNotEmpty } from 'class-validator';

export class UpdateEstadoAusenciaDto {
  @IsString()
  @IsIn(['APROBADA', 'RECHAZADA'], { message: 'El estado debe ser APROBADA o RECHAZADA.' })
  @IsNotEmpty({ message: 'El estado es obligatorio.' })
  estado: string;
}
