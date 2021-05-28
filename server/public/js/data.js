const sockets = io();

sockets.on('temperatura', function(str) {

    let hmd = str.substr(0, 2);
    let tmp = str.substr(5, 2);

    // console.log(tmp);

    let temperatura = document.getElementById('temp');
    let humedad = document.getElementById('hum');

    temperatura.innerHTML = tmp + "°C";
    humedad.innerHTML = hmd + "%";

    let temperatura_completa = document.getElementById('complete_temp');
    let humedad_completa = document.getElementById('complete_hum');

    let cm_hmd = str.substr(0, 5);
    let cm_tmp = str.substr(5, 5);

    temperatura_completa.innerHTML = cm_tmp + "°C";
    humedad_completa.innerHTML = cm_hmd + "%";


})