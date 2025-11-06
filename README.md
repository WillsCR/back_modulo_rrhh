# back_modulo_rrhh

##  Instalación y Configuración

###  Prerrequisitos

Asegúrate de tener instalado lo siguiente antes de iniciar:

* **Node.js** 
* **npm**
* **Base de datos configurada**

---

###  1. Instalación de dependencias

```bash
npm install
```

###  2. Configuración de la base de datos

Crea un archivo **.env** en la raíz del proyecto con el siguiente contenido:

```env
DATABASE_URL="tu_url_de_base_de_datos_aqui"
```

###  3. Generación del cliente de Prisma

```bash
npx prisma generate
```

###  4. Ejecutar en modo desarrollo

```bash
npm run start:dev
```

El servidor se iniciará en: [http://localhost:3000](http://localhost:3000)

---

## Estructura de la API

###  Autenticación

**Base URL:** `http://localhost:3000/auth`

#### Endpoints disponibles para los demás módulos:

* **POST** `/auth/register` → Registro de usuarios
* **POST** `/auth/login` → Inicio de sesión

##  Comandos útiles

### Desarrollo

```bash
# Ejecutar en modo desarrollo
npm run start:dev

# Ejecutar en modo producción
npm run start:prod

# Ejecutar en modo debug
npm run start:debug
```

### Prisma

```bash
# Generar cliente Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma migrate dev

# Abrir Prisma Studio
npx prisma studio

# Generar nueva migración
npx prisma migrate dev --name nombre_migracion
```

---

## 📝 Notas importantes

### 🧾 Registro de usuarios

**Endpoint:** `POST http://localhost:3000/auth/register`

* El **empleado** debe existir previamente en la base de datos.
* Se valida que no exista un usuario registrado para el mismo empleado.
* Los **roles** se asignan automáticamente si el empleado no los tiene configurados.

#### Ejemplo de DTO:

```json
{
  "email": "string",
  "rut": "string",
  "password": "string"
}
```

---
### Comandos de base de datos:

```bash
# Resetear base de datos (⚠️ cuidado en producción)
npx prisma migrate reset

# Estado de migraciones
npx prisma migrate status

# Generar schema desde base de datos existente
npx prisma db pull
```

---


