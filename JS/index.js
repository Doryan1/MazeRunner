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
  $("#index").submit(function(e) {
    e.preventDefault();
    // get the user name and password from form
    // You need to change this.
    var email = "doryan@usca.edu";
    var password = "taco";
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        // Signed in
        // ...
        console.log("login in");
        let user = firebase.auth().currentUser;
        window.location.href = "home.html" ; 
  
        //user.updateProfile({ displayName: "Not sure" });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  });