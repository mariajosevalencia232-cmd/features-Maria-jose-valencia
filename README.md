Coquito Amarillo API REST
# Coquito Amarillo API

API REST desarrollada con Node.js y Express para la gestión de productos, pedidos y pagos PSE.

---

# Descripción

Este proyecto permite:

- Consultar productos
- Crear pedidos
- Consultar pedidos
- Actualizar pedidos
- Eliminar pedidos
- Simular pagos PSE

La API fue desarrollada siguiendo una arquitectura organizada con rutas y controladores separados.

---

# Tecnologías usadas

- Node.js
- Express.js
- JavaScript
- Nodemon
- Git
- GitHub

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TU-USUARIO/coquito-amarillo-api-LPM01-201-3.git
```

Entrar a la carpeta del proyecto:

```bash
cd coquito-amarillo-api-LPM01-201-3
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm run dev
```

Servidor corriendo en:

```bash
http://localhost:3000
```

---

# Estructura del proyecto

```bash
src/
│
├── controllers/
├── routes/
├── middlewares/
├── models/
└── app.js
```

---

# Endpoints

# Productos

## Obtener productos

```http
GET /api/productos
```

---

# Pedidos

## Obtener todos los pedidos

```http
GET /api/pedidos
```

## Obtener pedido por ID

```http
GET /api/pedidos/:id
```

## Crear pedido

```http
POST /api/pedidos
```

Ejemplo:

```json
{
  "cliente": "Jose Agudelo",
  "producto": "Coquito Fresa",
  "cantidad": 2,
  "total": 16000
}
```

---

## Actualizar pedido

```http
PUT /api/pedidos/:id
```

Ejemplo:

```json
{
  "cliente": "Jose Agudelo",
  "producto": "Coquito Tradicional",
  "cantidad": 3,
  "total": 24000
}
```

---

## Eliminar pedido

```http
DELETE /api/pedidos/:id
```

---

# Pagos PSE

## Procesar pago PSE

```http
POST /api/pagos-pse
```

Ejemplo:

```json
{
  "banco": "Bancolombia",
  "usuario": "Jose Agudelo",
  "valor": 50000
}
```

---

# Validaciones implementadas

## Pedidos

- Todos los campos son obligatorios
- La cantidad debe ser mayor a 0
- El total debe ser mayor a 0
- Validación de ID inexistente

## Pagos PSE

- Banco obligatorio
- Usuario obligatorio
- Valor mayor a 0

---

# Autor

Proyecto desarrollado por Jose Gabriel Agudelo Vargas.
---

# Referencias y apoyo

Durante el desarrollo de este proyecto se consultó documentación oficial de Node.js y Express.js, además de utilizar herramientas de apoyo basadas en inteligencia artificial como ChatGPT de OpenAI para resolver dudas técnicas, comprender conceptos y reforzar el aprendizaje durante la implementación de la API REST.
# T'essence — API REST

Proyecto desarrollado con Node.js y Express que permite gestionar productos, pedidos y pagos PSE mediante una API REST.

Tecnologías utilizadas

- Node.js
- Express
- Cors
- Nodemon

Instalación del proyecto

```bash
npm install
```

Ejecución del servidor

```bash
node src/app.js
```

También se puede ejecutar con:

```bash
npm run dev
```

Funcionalidades disponibles

Productos

- Consultar todos los productos
- Consultar producto por ID
- Registrar nuevos productos
- Actualizar productos
- Eliminar productos

Pedidos

- Crear pedidos
- Consultar pedidos registrados

Pagos PSE

- Registrar pagos PSE
- Consultar pagos por referencia

Rutas principales

GET

```bash
/api/productos
/api/productos/:id
/api/pedidos
/api/pagos-pse/:ref
```

POST

```bash
/api/productos
/api/pedidos
/api/pagos-pse
```

PUT

```bash
/api/productos/:id
```

DELETE

```bash
/api/productos/:id
```

Autor

Juan David Torres
Servidor disponible en http://localhost:3000

## Endpoints

### Productos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/productos | Listar todos los productos |
| GET | /api/productos?categoria=... | Filtrar por categoría |
| GET | /api/productos/:id | Obtener producto por ID |
| POST | /api/productos | Crear nuevo producto |
| PUT | /api/productos/:id | Actualizar producto |
| DELETE | /api/productos/:id | Eliminar producto |

### Pedidos
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/pedidos | Listar todos los pedidos |
| GET | /api/pedidos?estado=... | Filtrar por estado |
| GET | /api/pedidos/:id | Obtener pedido por ID |
| POST | /api/pedidos | Crear nuevo pedido |
| PUT | /api/pedidos/:id | Actualizar pedido |
| DELETE | /api/pedidos/:id | Eliminar pedido |

### Personas
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /api/personas | Listar clientes (numDoc enmascarado) |
| GET | /api/personas/:id | Obtener cliente por ID |
| POST | /api/personas | Registrar nuevo cliente |
| PUT | /api/personas/:id | Actualizar cliente |
| DELETE | /api/personas/:id | Desactivar cliente |

### Pagos PSE
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | /api/pagos-pse | Simular transacción PSE |
| GET | /api/pagos-pse/:ref | Consultar estado por referencia |
| PUT | /api/pagos-pse/:ref/estado | Actualizar estado (APROBADO/RECHAZADO) |

## Stack tecnológico

- Node.js v20 LTS
- Express 4.18
- GitHub Codespaces
- HTML / CSS / JavaScript vanilla
- Lucide Icons

## Estructura del proyecto

src/
├── controllers/
├── models/
├── middlewares/
├── routes/
└── public/
    ├── index.html
    └── img/

## Normativa aplicada

- Ley 527 de 1999 — Comercio electronico en Colombia
- Ley 1581 de 2012 — Proteccion de datos personales (Habeas Data)

## Autora

Valentina Arias — Ingenieria de Software — FUMC 2026
