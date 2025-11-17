# ============================
# 1. Etapa: Builder
# ============================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# ⚠ IMPORTANTE: Generar Prisma Client ANTES del build
RUN npx prisma generate

# Compilar NestJS (TS → JS)
RUN npm run build



# ============================
# 2. Etapa: Imagen final
# ============================
FROM node:20-alpine AS production

WORKDIR /app

# Instalar dependencias de producción
COPY package*.json ./
RUN npm install --omit=dev

# Copiar dist compilado
COPY --from=builder /app/dist ./dist

# Copiar carpeta GENERADA de Prisma
COPY --from=builder /app/generated ./generated

# Copiar schema (no es obligatorio pero recomendado)
COPY --from=builder /app/prisma ./prisma

# Exponer el puerto configurado
EXPOSE 3004

# Comando final
CMD ["node", "dist/main.js"]
