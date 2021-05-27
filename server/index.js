//Servidor HTTP y websockets

const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(__dirname + '/public'))

server.listen(3000, function(){
    console.log('Servidor listo en:', 3000);
});



// Conexion al puerto serial
const { parse } = require('cookie');
const serialPort = require('serialport');

const port = new serialPort(
    "COM4",
    {baudRate: 9600}
);

const parser = new serialPort.parsers.Readline();

port.pipe(parser);

parser.on('data', (line)=>{
    console.log(line);
    io.emit('temperatura', line);
});

