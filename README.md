# API de Cursos con Node.js, Express y MongoDB

**Autor:** Jhon Guamán  
**Universidad:** Universidad de las Fuerzas Armadas ESPE  
**Fecha:** 28 de junio de 2025

---

## Introducción

Este proyecto consiste en el desarrollo de una API RESTful para la gestión de cursos, utilizando Node.js, Express y MongoDB con Mongoose. El objetivo principal es demostrar buenas prácticas en la organización de un backend, separando la lógica en modelos, controladores y rutas, y facilitando la escalabilidad y el mantenimiento del código. Además, se evidencia el funcionamiento de los endpoints mediante pruebas en Postman y la correcta conexión con la base de datos.

---

## Estructura del Proyecto

La estructura del proyecto está organizada bajo la carpeta `src/` para mantener una separación clara de responsabilidades:

```
espe-mongoose/
│   package.json
│   docker-compose.yml
└───src/
    │   index.js
    ├──controllers/
    │     courseController.js
    ├──models/
    │     course.js
    └──routers/
          courseRouter.js
```

- **models/**: Definición de esquemas y modelos de Mongoose.
- **controllers/**: Lógica de negocio y manejo de peticiones.
- **routers/**: Definición de rutas y vinculación con controladores.
- **index.js**: Archivo principal que configura la app y la conexión a MongoDB.

---

## Instalación y Ejecución

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor:
   ```bash
   npm start
   ```
3. El servidor estará disponible en `http://localhost:8080`.

---

## Endpoints Principales

- `POST   /course`         : Crea un nuevo curso.
- `GET    /course`         : Obtiene todos los cursos.
- `GET    /course/:id`     : Obtiene un curso por su ID.
- `PUT    /course/:id`     : Actualiza el número de temas de un curso.
- `DELETE /course/:id`     : Elimina un curso por su ID.

---

## Capturas de Pantalla

A continuación se presentan capturas que evidencian la correcta organización del proyecto y el funcionamiento de los endpoints principales utilizando Postman:

### 1. Estructura del Proyecto y Ejecución Exitosa

![Estructura del Proyecto y Consola](https://i.imgur.com/3qshqn6.png)

En esta imagen se observa la estructura de carpetas organizada bajo `src/` con las subcarpetas `models`, `controllers` y `routers`, además del archivo principal `index.js`. En la consola se visualiza la salida de nodemon indicando el reinicio automático, el inicio del servidor y la conexión exitosa a MongoDB:
```
[nodemon] restarting due to changes...
[nodemon] starting `node src/index.js`
Servidor iniciado
Conexión exitosa a MongoDB
```

---

### 2. Creación de un Curso (POST)

![POST en Postman](https://i.imgur.com/4vq8fmR.png)

Captura de Postman utilizando el método POST en la ruta `/course`. Se envía la petición y como respuesta se obtiene el objeto creado:
```json
{
  "title": "Curso de Express",
  "description": "Curso de Express para aprender a manejar Backend con Node",
  "numberOfTopics": 5,
  "_id": "6860c2353ba03b440202376b",
  "__v": 0
}
```

---

### 3. Consulta de Todos los Cursos (GET)

![GET todos los cursos](https://i.imgur.com/SBFAjBn.png)

En esta imagen se muestra el uso del método GET en `/course` desde Postman, obteniendo como respuesta un arreglo con todos los cursos almacenados en la base de datos.

---

### 4. Consulta de Curso por ID (GET)

![GET curso por ID](https://i.imgur.com/FR32gna.png)

Aquí se visualiza la petición GET a `/course/{id}` en Postman, donde `{id}` corresponde al identificador de un curso específico. La respuesta muestra los datos del curso solicitado.

---

### 5. Actualización de un Curso (PUT)

![PUT actualizar curso](https://i.imgur.com/SrbIJ7O.png)

Captura de la petición PUT a `/course/{id}`. Se observa que el campo `numberOfTopics` ha sido actualizado a 20, confirmando que la operación fue exitosa.

---

### 6. Eliminación de un Curso (DELETE)

![DELETE eliminar curso](https://i.imgur.com/U2vKzy9.png)

En esta imagen se muestra la petición DELETE a `/course/{id}`. La respuesta indica `"Curso eliminado"`, confirmando que el curso fue removido correctamente de la base de datos.

---

## Conclusiones

- La correcta organización del backend facilita el mantenimiento y la escalabilidad del proyecto.
- El uso de Mongoose simplifica la interacción con MongoDB y permite definir validaciones a nivel de modelo.
- Probar los endpoints con Postman asegura que la API responde correctamente a las operaciones CRUD básicas.
- Separar la lógica en controladores, modelos y rutas permite un desarrollo más limpio y profesional.

---

## Recomendaciones

- Mantener la estructura modular del proyecto para facilitar futuras ampliaciones o cambios.
- Documentar cada endpoint y función para mejorar la mantenibilidad y comprensión del código.
- Implementar validaciones personalizadas y manejo de errores más detallado para robustecer la API.
- Considerar el uso de variables de entorno para credenciales y cadenas de conexión sensibles.
- Realizar pruebas automatizadas para asegurar la calidad y funcionamiento de la API ante cambios futuros.

---

## Referencias

- [Documentación oficial de Express](https://expressjs.com/)
- [Documentación oficial de Mongoose](https://mongoosejs.com/)
- [Postman](https://www.postman.com/)
