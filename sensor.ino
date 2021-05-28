/*
    IMPORTANTE:
    ----------------------------------
    Dependencias: 
        - Libreria DHT.h -> Debe ser instalada por medio del gestor de librerias de Arduino IDE.
        - Driver USB FT232R -> Para que arduino nano pueda ser detectado por el puerto serial.

    Hardware Usado:
        - Arduino Nano rev3 (Clon)
        - DHT11

    Nota: Para poder bootear el codigo en el arduino debe usarse como opcion de processor el ATmega328P (Old Bootloader).
    
    Codigo elaborado por Sebastian Henao Loaiza y Brayan Stiven Marin Duque
*/

#include "DHT.h"

#define DHTPIN 12
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup(){
	Serial.begin(9600);
    dht.begin();
}

void loop(){
	delay(5000);

    float humedad = dht.readHumidity();
    float temperatura = dht.readTemperature();

    if (isnan(humedad) || isnan(temperatura)){
        Serial.println("Error");
        return;
    }

/* ATENCION: esto es una chapuza que hice para poder trabajar los datos como un string en JS ruego al que lea esto que si no lo va a mejorar que mejor NO LO TOQUE*/
    String humedad_str = String(humedad);
    String temperatura_str = String(temperatura);

    humedad_str.concat(temperatura_str);

    Serial.print(humedad_str);
    Serial.print("\n");
/*-------------------------PELIGRO----------------------------*/

}
