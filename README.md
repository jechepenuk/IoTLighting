# IoTLighting

This project using a 3D printed switch cover, a servo motor, an esp8266, Firebase and a web app to remotely control a light switches on/off state as long as you are using the same wifi as the switch's esp8266 attached. See video linked below for the results.

## Use

This code requires a firebase web app and a cloud database with 5 values for each of the buttons: ledStatus(1-4) and ledStatusMaster. FirebaseArduino.ino requires a manual entry of the wifi name and password that will be connected to the esp8266 device. Without the 3D printed switch convering, you simply can connect a servo motor to the esp8266 and ensure that on upload of the code, the servo moves the proper degree of rotation in order to pull a device down, or push a device up.
