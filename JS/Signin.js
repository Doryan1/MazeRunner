const firebaseConfig = {
    apiKey: "AIzaSyBEyvsq7EGO24ksZMVMRL5CyJBWmmpQ7KE",
    authDomain: "maze-runner-587ba.firebaseapp.com",
    projectId: "maze-runner-587ba",
    storageBucket: "maze-runner-587ba.appspot.com",
    messagingSenderId: "571736832604",
    appId: "1:571736832604:web:401106f003cb074ae20499",
    measurementId: "G-DT9YRDCPNK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  $("#Login").submit(function(e){
    e.preventDefault();
  
    // Get username(email) and password from form
    let theData = $("form").serializeArray();
    console.log(theData);
    let inputJson3 = {};
  
    for(let i = 0; i < theData.length; i++){
      let logName = theData[i]["name"];
      let logVal = theData[i]["value"];
      console.log("LogName: " + logName + " " + logVal);
      inputJson3[name] = logVal; 
    }
  
    console.log("Login Name: " + inputJson3["login"]);
  
    let email2 = inputJson3["login"];
    let password2 = inputJson3["pwd"]
  
    // sign in 
    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .then(success => {
      console.log("Login success");
  
      //optional
      let user = firebase.auth().currentUser;
      console.log("works " + user.displayName + " " + user.email + " " + user.emailVerified)
      document.getElementById("../HTML/home.html").innerHTML ; 
    })
    .catch(error =>{
      let errorMessage = error.message;
      console.log(errorMessage);
    }); 
  
  });