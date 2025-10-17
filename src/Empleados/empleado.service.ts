import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EmpleadosService{
    constructor(private prisma: PrismaService){}

    async findAll(){
        return this.prisma.rrhh_empleado.findMany({
        include:{
            departamento: true,
            roles:{
                include:{ rol: true,}
            }
        }    
        });
    }

    async findUnique(id_empleado: number){
        return this.prisma.rrhh_empleado.findUnique({
            where: (id_empleado),
            include:{departamento: true, usuario: true, roles:{include:{rol: true,}}},
        });
    }

    async empleadoPorDepartamento(id_departamento: number){
        return this.prisma.rrhh_empleado.findMany({
            where: {id_departamento},
            include:{departamento: true, usuario: true, roles:{include:{rol: true,}}},
        });
    }

    async vacacionesPorEmpleado(id_empleado: number){
        return this.prisma.rrhh_vacaciones.findMany({
            where : {id_empleado},
            include:{
                empleado :true,
                estado: true
            }
        })
    }
}