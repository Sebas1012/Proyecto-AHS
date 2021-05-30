function tema(tipo) {
    tipo = tipo.toLowerCase();

    let documento = document.getElementById('documento');
    let card_1 = document.getElementById('card_1');
    let card_2 = document.getElementById('card_2');
    let card_3 = document.getElementById('card_3');

    if(tipo === "light"){
        console.log("Selecciono el tema claro.")
        documento.classList.remove('dark');
        documento.classList.add('light')

        card_1.classList.remove('dark-card');
        card_2.classList.remove('dark-card');
        card_3.classList.remove('dark-card');

    }else if(tipo === "dark"){
        console.log("Selecciono el tema oscuro.")
        documento.classList.remove('light');
        documento.classList.add('dark')

        card_1.classList.add('dark-card');
        card_2.classList.add('dark-card');
        card_3.classList.add('dark-card');


    }else{
        alert("Error, el dato ingresado no es permitido, intente de nuevo. (Recuerde que debe ingresar un dato tipo string que tenga los valores 'Light' para seleccionar el tema claro y 'Dark' para seleciionar el tema oscuro.)")
    }
    
}