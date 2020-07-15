//insert details from firebase below
var config = {
    apiKey: "xxxxxx",
    authDomain: "<project name>.firebaseapp.com",
    databaseURL: "https://<name>.firebaseio.com",
    projectId: "<projext name>",
    storageBucket: "<name>.appspot.com",
    messagingSenderId: "xxxxxxx",
    appId: "xxxxxxx"
  };
  //initalize firebase for data read and write
  firebase.initializeApp(config);

  //change all buttons and their color
  function changeAll(id){
    var string = document.getElementById(id).innerHTML;
      if(string.includes("OFF")){
        document.getElementById("1").innerHTML =  "Light 1 ON";
        document.getElementById("2").innerHTML =  "Light 2 ON";
        document.getElementById("3").innerHTML =  "Light 3 ON";
        document.getElementById("4").innerHTML =  "Light 4 ON";
        document.getElementById("Master").innerHTML =  "Light Master ON";
        changeColorOff(document.getElementById("1"));
        changeColorOff(document.getElementById("2"));
        changeColorOff(document.getElementById("3"));
        changeColorOff(document.getElementById("4"));
        changeColorOff(document.getElementById("Master"));
        changeMFB (0);
      } else{
        document.getElementById("1").innerHTML =  "Light 1 OFF";
        document.getElementById("2").innerHTML =  "Light 2 OFF";
        document.getElementById("3").innerHTML =  "Light 3 OFF";
        document.getElementById("4").innerHTML =  "Light 4 OFF";
        document.getElementById("Master").innerHTML =  "Light Master OFF";
        changeColorOn(document.getElementById("1"));
        changeColorOn(document.getElementById("2"));
        changeColorOn(document.getElementById("3"));
        changeColorOn(document.getElementById("4"));
        changeColorOn(document.getElementById("Master"));
        changeMFB (1);
      }
}
function changeColorOn (button){
  button.style.backgroundColor ="crimson";
}
function changeColorOff (button){
  button.style.backgroundColor = "dimgray";
}

function changeButton(id){
  var string = document.getElementById(id).innerHTML;
  if(string.includes("ON")){
    var value = 1;
    changeColorOn(document.getElementById(id));
    document.getElementById(id).innerHTML =  "Light " + id + " OFF";
    if (id=="1"){
      changeFB (value);
    }else if (id=="2"){
      change2FB(value);
    }else if (id=="3"){
      change3FB(value);
    }else{
      change4FB(value);
    }
  }else{
    var value = 0;
    changeColorOff(document.getElementById(id));
    document.getElementById(id).innerHTML =  "Light " + id +  " ON";
    if (id=="1"){
      changeFB (value);
    }else if (id=="2"){
      change2FB(value);
    }else if (id=="3"){
      change3FB(value);
    }else {
      change4FB(value);
  }
}
}
  //changes firebase's connection value to the name of your wifi
  function estConnect(){
    return firebase.database().ref("connection").once('value');
  }

  //these following four functions change specific button values in firebase

  function changeFB (value){
    firebase.database().ref().set({
      ledStatus : value
  });
}
  function change2FB (value){
  firebase.database().ref().set({
    ledStatus2 : value
  });
}
  function change3FB (value){
  firebase.database().ref().set({
    ledStatus3 : value
  });
}
  function change4FB (value){
  firebase.database().ref().set({
    ledStatus4 : value
  });
}
  //change all values in firebase
  function changeMFB (value){
  firebase.database().ref().set({
    ledStatus : value,
    ledStatus2 : value,
    ledStatus3 : value,
    ledStatus4 : value,
    ledStatusMaster : value
  });
}