function tema(tipo) {
    tipo = tipo.toLowerCase();

    if(tipo === "light"){
        console.log("Selecciono el tema claro.")
    }else if(tipo === "dark"){
        console.log("Selecciono el tema oscuro.")
    }else{
        alert("Error, el dato ingresado no es permitido, intente de nuevo. (Recuerde que debe ingresar un dato tipo string que tenga los valores 'Light' para seleccionar el tema claro y 'Dark' para seleciionar el tema oscuro.)")
    }
    
}