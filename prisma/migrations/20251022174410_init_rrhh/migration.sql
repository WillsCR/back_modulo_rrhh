-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "RRHH";

-- CreateTable
CREATE TABLE "public"."empleado" (
    "id_empleado" SERIAL NOT NULL,
    "rut" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "id_departamento" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_baja" TIMESTAMP(3),
    "motivo_baja" TEXT,

    CONSTRAINT "empleado_pkey" PRIMARY KEY ("id_empleado")
);

-- CreateTable
CREATE TABLE "RRHH"."rrhh_departamento" (
    "id_departamento" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "rrhh_departamento_pkey" PRIMARY KEY ("id_departamento")
);

-- CreateTable
CREATE TABLE "RRHH"."rrhh_usuario" (
    "id_usuario" SERIAL NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "password_hash" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "rrhh_usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "RRHH"."rrhh_rol" (
    "id_rol" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "rrhh_rol_pkey" PRIMARY KEY ("id_rol")
);

-- CreateTable
CREATE TABLE "RRHH"."rrhh_empleado_rol" (
    "id_empleado" INTEGER NOT NULL,
    "id_rol" INTEGER NOT NULL,

    CONSTRAINT "rrhh_empleado_rol_pkey" PRIMARY KEY ("id_empleado","id_rol")
);

-- CreateTable
CREATE TABLE "RRHH"."rrhh_ausencia" (
    "id_ausencia" SERIAL NOT NULL,
    "id_empleado" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,
    "motivo" TEXT,
    "fecha_solicitud" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rrhh_ausencia_pkey" PRIMARY KEY ("id_ausencia")
);

-- CreateIndex
CREATE UNIQUE INDEX "empleado_rut_key" ON "public"."empleado"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "empleado_email_key" ON "public"."empleado"("email");

-- CreateIndex
CREATE INDEX "empleado_id_departamento_idx" ON "public"."empleado"("id_departamento");

-- CreateIndex
CREATE INDEX "empleado_estado_idx" ON "public"."empleado"("estado");

-- CreateIndex
CREATE UNIQUE INDEX "rrhh_usuario_id_empleado_key" ON "RRHH"."rrhh_usuario"("id_empleado");

-- CreateIndex
CREATE UNIQUE INDEX "rrhh_rol_nombre_key" ON "RRHH"."rrhh_rol"("nombre");

-- AddForeignKey
ALTER TABLE "public"."empleado" ADD CONSTRAINT "empleado_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "RRHH"."rrhh_departamento"("id_departamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRHH"."rrhh_usuario" ADD CONSTRAINT "rrhh_usuario_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "public"."empleado"("id_empleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRHH"."rrhh_empleado_rol" ADD CONSTRAINT "rrhh_empleado_rol_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "public"."empleado"("id_empleado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRHH"."rrhh_empleado_rol" ADD CONSTRAINT "rrhh_empleado_rol_id_rol_fkey" FOREIGN KEY ("id_rol") REFERENCES "RRHH"."rrhh_rol"("id_rol") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRHH"."rrhh_ausencia" ADD CONSTRAINT "rrhh_ausencia_id_empleado_fkey" FOREIGN KEY ("id_empleado") REFERENCES "public"."empleado"("id_empleado") ON DELETE RESTRICT ON UPDATE CASCADE;
