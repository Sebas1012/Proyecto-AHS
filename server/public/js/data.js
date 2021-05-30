const sockets = io();

sockets.on('temperatura', function(str) {

    let hmd = str.substr(0, 2);
    let tmp = str.substr(5, 2);

    tmp = parseFloat(tmp);

    let frh = (tmp * 9/5) + 32;

    // console.log(tmp);

    let temperatura = document.getElementById('temp');
    let humedad = document.getElementById('hum');

    temperatura.innerHTML = tmp + "°C";
    humedad.innerHTML = hmd + "%";

    let temperatura_completa = document.getElementById('complete_temp');
    let humedad_completa = document.getElementById('complete_hum');


    temperatura_completa.innerHTML = frh + "°F";
    humedad_completa.innerHTML = hmd + "%";


})