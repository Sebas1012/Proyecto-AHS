const sockets = io();

sockets.on('temperatura', function(line) {
    console.log(line);
})