var firebaseConfig = {
      apiKey: "AIzaSyB8bl4zmdTIjmjDDBSmxANTkhHC8FxOqTI",
      authDomain: "kwitter-database-server.firebaseapp.com",
      databaseURL: "https://kwitter-database-server-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-server",
      storageBucket: "kwitter-database-server.appspot.com",
      messagingSenderId: "736442671194",
      appId: "1:736442671194:web:2bb2e879be9a34bdbd3863",
      measurementId: "G-L8KE15B0CC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE
username=localStorage.getItem("userKey");
document.getElementById("username").innerHTML="Welcome, "+username+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
