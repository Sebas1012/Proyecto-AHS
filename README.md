# Proyecto-AHS
Proyecto estación de medición de humedad y temperatura con Arduino y JS para Arquitectura de Hardware y Software.

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
Para poder hacer uso de este programa, primero debe subir el codigo del archivo [sensor.ino]() a su placa.

Luego solo necesita ejecutar estando en la carpeta desde consola el comando:
```
npm start
```

Si el comando anterior tienen algun fallo, solo dirijase a la carpeta [server]() y ejecute el siguiente comando:
```
node index.js
```

*Nota: Recuerde validar el puerto de comunicacion serial que esta usando su placa, por defecto esta configurado el puerto COM4 pero si es uno diferente al mismo cambielo en el archivo [index.js](/server/index.js) ubicado en la carpeta server. Cambie la linea de codigo numero 24 por el puerto necesario (SIEMPRE DENTRO DE COMILLAS).*

