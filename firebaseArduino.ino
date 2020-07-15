#include <Firebase.h>
#include <FirebaseArduino.h>
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>

//fill in your own information below from firebase console
#define FIREBASE_HOST "xxxxxxxxx.firebaseio.com"
#define FIREBASE_AUTH "xxxxxxxxx"

//fill in your own wifi/password below
#define WIFISSID "xxxxxxxxxx"
#define WIFIPASS "xxxxxxxxxx"

SoftwareSerial SUART(4,5); //connect arduino to wifi module

void setup() {
  SUART.begin(9600); //initiate connection between arduino and wifi module
  Serial.begin(9600);
  WiFi.begin(WIFISSID, WIFIPASS);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) { 
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP()); //these two blocks identify secure connection & IP of connection
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH); //init firebase
}

void loop() {
  int ledStatus = Firebase.getInt("ledStatus"); //retreive values from firebase
  int ledStatusMaster = Firebase.getInt("ledStatusMaster");
  if (Firebase.failed()){
    Serial.println("failure");
    ESP.restart();
  }
  //send on status to arduino
  if(ledStatus == 1 || ledStatusMaster==1){
    Serial.print("1");
    SUART.print("1");
  }
  //send off status to arduino
  else{      
    Serial.print("0");
    SUART.print("0");
  }
}
