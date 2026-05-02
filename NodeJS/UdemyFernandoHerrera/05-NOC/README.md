# Proyecto NOC

El objetivo es crear una serie de tareas usando **_Arquitectura Limpia_** con `Typescript`. Todo esto principalmente para aprender como funciona `NodeJs`, `Typescript` y diferentes librerías de `Javascript`

> **Nota**: Este proyecto hace parte del curso de **NodeJS: de cero a experto** de **DevTalles**. Se ha modificado un poco para poner en práctica lo aprendido y con tener pequeñas mejoras en el proyecto.

## dev

1. Clonar el archivo env.template a .env
2. Configurar las variables de entorno
3. Ejecutar el código `npm install`.
4. Levantar las bases de datos con el comando.

    ``` DOCKER
    docker desktop start
    docker compose up -d
    ```

5. Al tener el contenedor ejecutandose se debe ejecutar el comando ```npx prisma migrate dev```.
6. Después ejecutar el comando ```npm run dev```.
