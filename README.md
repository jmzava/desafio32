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

node build/server.js --port 8080 --mode FORK/CLUSTER

con FOREVER

forever start  build/server.js --port 8080 --mode FORK/CLUSTER
forever list
forever stop <PID>
forever stopall

con PM2 en modo FORK

pm2 start build/server.js --name="serverAPP" -- --port PORT --mode FORK/CLUSTER

con PM2 en modo CLUSTER

pm2 start build/server.js --name="serverAPP" --watch -i max -- --port PORT --mode FORK/CLUSTER



para el /api/randoms tiene un numero definido, si se pasa la url como api/randoms?cant=XXX ejecuta el numero solicitado



