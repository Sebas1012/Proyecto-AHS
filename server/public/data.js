const sockets = io();

sockets.on('temperatura', function(line) {
    console.log(line);

    let temperatura = document.getElementById('temp');
    temperatura.innerHTML = line;
})