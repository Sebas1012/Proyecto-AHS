# Estacion de medicion de temperatura y humedad.
Proyecto estación de medición de humedad y temperatura con Arduino y JS para la asignatura Arquitectura de Hardware y Software.

**Por: Sebastian Henao Loaiza y Brayan Stiven Marin Duque.**

## Dependencias:
- Express
- SerialPort
- Socket.io

## Instalar dependencias:
Para instalar las dependencias de Javascript del proyecto solo debemos situarnos en la carpeta del mismo y ejecutar desde consola el siguiente codigo:
```
npm install
```

*Nota: Es importante tener instalada la libreria [DHT.h](https://github.com/adafruit/DHT-sensor-library) en nuestro IDE de arduino, la misma puede instalarse desde el propio IDE.*

## Uso:
Para poder hacer uso de este programa, primero debe subir el codigo del archivo [sensor.ino](/sensor.ino) a su placa.

Luego solo necesita ejecutar estando en la carpeta desde consola el comando:
```
npm start
```

Si el comando anterior tienen algun fallo, solo dirijase a la carpeta [server](/server) y ejecute el siguiente comando:
```
node index.js
```

Luego de ejecutar cualquiera de los comandos anteriores, desde consola se le indicara el puerto por el que puede acceder a la interface web, que por default es:
```
port: 3000
```

Como ultimo solo queda dirigirse en su navegador a la direccion:
```
localhost:3000
```

*Nota: Recuerde validar el puerto de comunicacion serial que esta usando su placa, por defecto esta configurado el puerto COM4 pero si es uno diferente al mismo cambielo en el archivo [index.js](/server/index.js) ubicado en la carpeta server. Cambie la linea de codigo numero 24 por el puerto necesario (SIEMPRE DENTRO DE COMILLAS).*

