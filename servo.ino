#include <Servo.h>
#include <SoftwareSerial.h>

SoftwareSerial SUART(2,3);
Servo s;
int x;
int servo = 7;
void setup(){
  SUART.begin(9600);
  Serial.begin(9600);
  s.attach(servo);
  pinMode(servo, OUTPUT);
  s.write(113);
}
void loop(){
  byte n = SUART.available();
  if (n!=0){
    x = SUART.read();
    Serial.print(x-48);
    Serial.println();
  } 
  if ((x-48)==1){
    s.write(0);
  }else{
    s.write(180);    
  }
}
