var firebaseConfig = {
    apiKey: "AIzaSyDqAs53yqrUCqvlUlOnVy35b5ZsLdwoOP8",
    authDomain: "c100-f6328.firebaseapp.com",
    databaseURL: "https://c100-f6328-default-rtdb.firebaseio.com",
    projectId: "c100-f6328",
    storageBucket: "c100-f6328.appspot.com",
    messagingSenderId: "1090635728030",
    appId: "1:1090635728030:web:cf95338c26eaafb338678f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name")
room_name= localStorage.getItem("room_name")

function logout(){
    window.location= "index.html";
}

function send(){
    msg= document.getElementById("input").ariaValueMax;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    })
    document.getElementById("input").value;
}