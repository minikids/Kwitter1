var firebaseConfig = {
    apiKey: "AIzaSyC9UWWKNDevUKbGIeXN-AwcvDjXX_toUEc",
    authDomain: "project-cad95.firebaseapp.com",
    databaseURL: "https://project-cad95-default-rtdb.firebaseio.com",
    projectId: "project-cad95",
    storageBucket: "project-cad95.appspot.com",
    messagingSenderId: "22652249236",
    appId: "1:22652249236:web:618de316359d6637c70081"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });
    document.getElementById("msg").value = "";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
