import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import e from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey:'tu_clave_secreta', // pasar al env
        });
    }

    async validate(payload: any) {
        const empleado = await this.prisma.empleado.findUnique({
            where: {id_empleado: payload.sub},
            include: {
                roles: {
                    include: {
                        rol: true
                    }
                }
            }
        });
        if (!empleado) {
            throw new UnauthorizedException('No autorizado');
        }
        const user = await this.prisma.rrhh_usuario.findUnique({
            where: {id_empleado: empleado.id_empleado}
        });

        if (!user || !user.activo) {
            throw new UnauthorizedException('Usuario inactivo o no existe');
        }

        return {
            id: empleado.id_empleado,
            email: empleado.email,
            nombre: empleado.nombre,
            apellido: empleado.apellido,
            rol: empleado.rol
        }
    }

}