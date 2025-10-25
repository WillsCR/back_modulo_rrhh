import { Body, Controller, Get, Post, Param, Put, Delete, Query, ParseIntPipe, HttpStatus, HttpCode } from "@nestjs/common";
import { EmpleadoService } from "./empleado.service";
import { AusenciaService } from "./ausencia.service";
import { CreateEmpleadoDto } from './dto/empleado.dto';
import { 
    CreateAusenciaDto, 
    UpdateAusenciaDto, 
    FiltroAusenciasDto 
} from './dto/ausencia.dto';
import {
    AsignarRolDto,
    FiltroEmpleadosDto,
    UpdateEmpleadoDto,
    BajaEmpleadoDto
} from './dto/rrhh.dto';

@Controller('rrhh')
export class RrhhController {
    constructor(
        private readonly empleadoService: EmpleadoService, 
        private readonly ausenciasService: AusenciaService
    ) {}

    // Endpoints de Empleados
    @Post('empleados')
    @HttpCode(HttpStatus.CREATED)
    async crearEmpleado(@Body() createEmpleadoDto: CreateEmpleadoDto) {
        return await this.empleadoService.createEmpleado(createEmpleadoDto);
    }

    @Get('empleados')
    async listarEmpleados(@Query() filtro: FiltroEmpleadosDto) {
        return await this.empleadoService.listarEmpleados(filtro.busqueda);
    }

    @Get('empleados/departamento/:id')
    async empleadosPorDepartamento(
        @Param('id', ParseIntPipe) id: number,
        @Query() filtro: FiltroEmpleadosDto
    ) {
        return await this.empleadoService.listarEmpleadosPorDepartamento(id, filtro);
    }

    @Get('empleados/:id')
    async obtenerEmpleado(@Param('id', ParseIntPipe) id: number) {
        return await this.empleadoService.findOne(id);
    }

    @Get('empleados/by-email')
    async obtenerEmpleadoPorEmail(@Query('email') email: string) {
        return await this.empleadoService.getEmpleadoByMail(email);
    }
    @Put('empleados/:id')
    async actualizarEmpleado(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateEmpleadoDto: UpdateEmpleadoDto
    ) {
        return await this.empleadoService.updateEmpleado(id, updateEmpleadoDto);
    }

    @Put('empleados/:id/baja')
    async darBajaEmpleado(
        @Param('id', ParseIntPipe) id: number,
        @Body() bajaDto: BajaEmpleadoDto
    ) {
        return await this.empleadoService.darBajaEmpleado(id, bajaDto.motivo);
    }

    @Post('empleados/:id/roles')
    async asignarRol(
        @Param('id', ParseIntPipe) id: number,
        @Body() asignarRolDto: AsignarRolDto
    ) {
        return await this.empleadoService.asignarRol(id, asignarRolDto.id_rol);
    }

    @Delete('empleados/:idEmpleado/roles/:idRol')
    async removerRol(
        @Param('idEmpleado', ParseIntPipe) idEmpleado: number,
        @Param('idRol', ParseIntPipe) idRol: number
    ) {
        return await this.empleadoService.removerRol(idEmpleado, idRol);
    }

    @Get('roles')
    async listarRoles() {
        return await this.empleadoService.listarRoles();
    }

    @Post('ausencias')
    @HttpCode(HttpStatus.CREATED)
    async solicitarAusencia(@Body() createAusenciaDto: CreateAusenciaDto) {
        return await this.ausenciasService.solicitarAusencia(
            createAusenciaDto.id_empleado,
            new Date(createAusenciaDto.fecha_inicio),
            new Date(createAusenciaDto.fecha_fin),
            createAusenciaDto.tipo
        );
    }

    @Get('ausencias')
    async listarAusencias(@Query() filtro: FiltroAusenciasDto) {
        return await this.ausenciasService.listarAusencias(filtro);
    }

    @Get('ausencias/:id')
    async obtenerAusencia(@Param('id', ParseIntPipe) id: number) {
        return await this.ausenciasService.findOne(id);
    }

    @Get('empleados/:id/ausencias')
    async ausenciasPorEmpleado(
        @Param('id', ParseIntPipe) id: number,
        @Query() filtro: FiltroAusenciasDto
    ) {
        return await this.ausenciasService.listarAusenciasPorEmpleado(id, filtro);
    }

    @Put('ausencias/:id/estado')
    async actualizarEstadoAusencia(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdateAusenciaDto
    ) {
        return await this.ausenciasService.actualizarEstado(id, updateDto.estado);
    }

 
    @Get('dashboard/ausencias-por-mes')
    async ausenciasPorMes(@Query('año') año: number) {
        return await this.ausenciasService.obtenerEstadisticasPorMes(año);
    }

    @Get('dashboard/empleados-por-departamento')
    async empleadosPorDepartamentoStats() {
        return await this.empleadoService.obtenerEstadisticasPorDepartamento();
    }

    @Get('dashboard/ausencias-por-tipo')
    async ausenciasPorTipo(@Query() filtro: FiltroAusenciasDto) {
        return await this.ausenciasService.obtenerEstadisticasPorTipo(filtro);
    }
}