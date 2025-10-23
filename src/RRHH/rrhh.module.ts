import { Module } from "@nestjs/common";
import { EmpleadoService } from "./empleado.service";
import { AusenciaService } from "./ausencia.service";
import { RrhhController } from "./rrhh.controller";



@Module({
 imports: [], 
 providers: [EmpleadoService, AusenciaService],
 controllers: [RrhhController],})
export class RrhhModule {}