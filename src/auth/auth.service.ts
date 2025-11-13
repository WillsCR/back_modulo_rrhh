import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    async login(loginDto: LoginDto) {
        // Buscar empleado por email
        const empleado = await this.prisma.empleado.findUnique({
            where: { email: loginDto.email },
            include: {
                roles: {
                    include: {
                        rol: true
                    }
                }
            }
        });

        if (!empleado) {
            throw new UnauthorizedException('Credenciales incorrectas 1');
        }

        // Buscar usuario y verificar contraseña
        const usuario = await this.prisma.rrhh_usuario.findUnique({
            where: { id_empleado: empleado.id_empleado }
        });

        if (!usuario || !usuario.activo) {
            throw new UnauthorizedException('Usuario inactivo o no existe');
        }

        const passwordValid = await bcrypt.compare(loginDto.password, usuario.password_hash);
        if (!passwordValid) {
            throw new UnauthorizedException('Credenciales incorrectas 2');
        }

        // Generar token JWT
        const payload = {
            sub: empleado.id_empleado,
            email: empleado.email,
            roles: empleado.roles.map(r => r.rol.nombre)
        };

        return {
            access_token: this.jwtService.sign(payload),
            empleado: {
                id: empleado.id_empleado,
                nombre: empleado.nombre,
                apellido: empleado.apellido,
                email: empleado.email,
                rol: empleado.rol,
                roles: empleado.roles.map(r => r.rol.nombre),
                id_departamento: empleado.id_departamento
            }
        };
    }

    async register(registerDto: RegisterDto) {
        let empleado;

        // Verificar si existe el empleado por RUT o email
        empleado = await this.prisma.empleado.findFirst({
            where: {
                OR: [
                    { email: registerDto.email },
                    { rut: registerDto.rut }
                ]
            },
            include: {
                roles: true
            }
        });

        
        if (empleado) {
            const existingUser = await this.prisma.rrhh_usuario.findUnique({
                where: { id_empleado: empleado.id_empleado }
            });

            if (existingUser) {
                throw new BadRequestException('Este empleado ya tiene un usuario registrado');
            }

            
            if (empleado.email !== registerDto.email || empleado.rut !== registerDto.rut) {
                throw new BadRequestException('Los datos proporcionados no coinciden con el empleado existente');
            }
        } else {
            //EMPLEADO NO EXISTE, RECHAZAR REGISTRO
            throw new BadRequestException('No se encontró un empleado con los datos proporcionados');
        }

        // Hashear contraseña y crear usuario
        const hashedPassword = await bcrypt.hash(registerDto.password, 10);
        await this.prisma.rrhh_usuario.create({
            data: {
                id_empleado: empleado.id_empleado,
                password_hash: hashedPassword,
                activo: true
            }
        });

        // Asignar rol si es un empleado nuevo
        if (!empleado.roles || empleado.roles.length === 0) {
            
            const rolEmpleado = await this.prisma.rrhh_rol.findFirst({
                where: {
                    nombre: 'EMPLEADO'
                }
            });

            if (!rolEmpleado) {
                throw new BadRequestException('No se encontró el rol EMPLEADO en el sistema');
            }

            // Asignar rol por defecto (EMPLEADO)
            await this.prisma.rrhh_empleado_rol.create({
                data: {
                    id_empleado: empleado.id_empleado,
                    id_rol: rolEmpleado.id_rol
                }
            });
        }

        return {
            message: 'Usuario registrado exitosamente',
            empleado: {
                id: empleado.id_empleado,
                nombre: empleado.nombre,
                email: empleado.email
            }
        };
    }

    
}