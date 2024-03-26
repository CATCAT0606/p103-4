// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



