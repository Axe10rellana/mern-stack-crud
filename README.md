# Stack Mern Con Context API

## Descripción

Codigo base del proyecto Crud que utiliza el Stack Mern y Context API en fase de desarrollo.

## Comandos

Iniciar servidor: "start": "node server/index.js",
Iniciar servidor en desarrollo: "dev": "nodemon server"
Iniciar servidor en desarrollo ignorando la carpeta client: "dev": "nodemon server --ignore client"
Iniciar servidor en desarrollo observado la carpeta server: "dev": "nodemon server --watch server"
Inicia el modo debug: "debug": "nodemon --inspect server --watch server"
Inicia el build de la carpeta client: "build": "npm install --prefix client && npm run build --prefix client && rm -rf client/node_modules"

## Dependencias

cloudinary, dotenv, express, express-fileupload, fs-extra, http-errors, mongoose, morgan

## Dependencias De Desarrollo

nodemon

## informacion adicional

Si el FrontEnd y BackEnd estan en el mismo dominio al tener el proxy en package.json del FrontEnd con la url de la api del BackEnd no va haber problema. Pero si FrontEnd y BackEnd estan separados en servicios distintos entonces es necesario instalar el paquete CORS.
