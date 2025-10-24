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
            throw new UnauthorizedException('Credenciales incorrectas');
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
            throw new UnauthorizedException('Credenciales incorrectas');
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
                roles: empleado.roles.map(r => r.rol.nombre)
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
            }
        });

        // Verificar si ya tiene un usuario registrado
        if (empleado) {
            const existingUser = await this.prisma.rrhh_usuario.findUnique({
                where: { id_empleado: empleado.id_empleado }
            });

            if (existingUser) {
                throw new BadRequestException('Este empleado ya tiene un usuario registrado');
            }

            // Si el empleado existe pero no tiene usuario, verificar que los datos coincidan
            if (empleado.email !== registerDto.email || empleado.rut !== registerDto.rut) {
                throw new BadRequestException('Los datos proporcionados no coinciden con el empleado existente');
            }
        } else {
            // Si no existe el empleado, crearlo
            empleado = await this.prisma.empleado.create({
                data: {
                    rut: registerDto.rut,
                    nombre: registerDto.nombre,
                    apellido: registerDto.apellido,
                    email: registerDto.email,
                    telefono: registerDto.telefono,
                    rol: registerDto.rol,
                    fecha_ingreso: new Date(),
                    id_departamento: registerDto.id_departamento,
                    estado: 'ACTIVO'
                }
            });
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

        // Asignar rol por defecto (EMPLEADO)
        await this.prisma.rrhh_empleado_rol.create({
            data: {
                id_empleado: empleado.id_empleado,
                id_rol: 3 // ID del rol EMPLEADO
            }
        });
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