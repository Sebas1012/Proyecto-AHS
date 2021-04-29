#include "DHT.h"

#define DHTPIN 12
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup()
{
	Serial.begin(9600);
    dht.begin();
}

void loop()
{
	delay(5000);

    float humedad = dht.readHumidity();
    float temperatura = dht.readTemperature();

    if (isnan(humedad) || isnan(temperatura)){
        Serial.println("Error");
        return;
    }

    Serial.print("Humedad: ");
    Serial.print(humedad);
    Serial.print("%");
    Serial.print("\n");
    Serial.print("Temperatura: ");
    Serial.print(temperatura);
    Serial.print("°C");
    Serial.print("\n");

}
