var firebaseConfig = {
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
  
  // save the data
  $("#signup-form").submit(function(e) {
    e.preventDefault();
    //get the username(email) and password from the form
    // change the following code
    var email = "yilianz4@gmail.com";
    var password = "ddsgagafda";
  
    // create a user with email address and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        // Signed in
        // ...
  
        console.log("You are signed up");
        window.location.href = "Login.html";
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(errorMessage);
      });
  });