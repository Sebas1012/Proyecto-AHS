const { parse } = require('cookie');
const serialPort = require('serialport');

const port = new serialPort(
    'COM3',
    {baudRate: 9600}
);

const parser = new serialPort.parsers.Readline();

port.pipe(parser);

parser.on('data', (line)=>{
    console.log('line');
});

