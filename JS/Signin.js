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
  $("#Login").submit(function(e) {
    e.preventDefault();
    // get the user name and password from form
    // You need to change this. 
    var email = "yilianz4@gmail.com";
    var password = "ddsgagafda";
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        // Signed in
        // ...
        console.log("login in");
        let user = firebase.auth().currentUser;
  
        //user.updateProfile({ displayName: "Not sure" });
        if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          console.log(name + email + emailVerified);
        }
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  });