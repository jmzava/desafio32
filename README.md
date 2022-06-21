Configurar el .env

Dejo un .env-ejemplo como base
Tirar los comandos

$ npm install
$ npm start
Carpeta "application" Contiene todo el código TS

Carpeta "build" Contiene el código js y las vistas en la carpeta public

Front
Cuando el servidor está corriendo acceder a

http://localhost:8080/

para ejecutar con un puerto desde la linea de comando 

pruebas artillery 

Ejecutar node —prof build/server.js

luego


Artillery quick --count 50 -n 20 http://localhost:8080/info2 > reports/artillery/artillery_with_console.log  


Artillery quick --count 50 -n 20 http://localhost:8080/info > reports/artillery/artillery_without_console.log  

se realiza el prof-proceess sobre el isolated file 

cuando l oejecuten sobre el log de artillery dio esto

(node:93775) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)


autocannon

sin consola

autocannon -c 100 -d 20 http://localhost:8080/info  

con consola

autocannon -c 100 -d 20 http://localhost:8080/info2  

se ejecuta el serveer 0x build/server.js

se corre la csarga con autocannon nuevamente 

se movio la carpeta generada luego de detener el servidor al reporte 0x

en todos los casos s nota claramente que el mostrar datos por consola afecta la performance de la app considerablemente


