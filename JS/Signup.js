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
  
  // start
  console.log("Start...");
  
  // Sign up when user clicks the button
  $('#signup-form').submit(function(e){
    e.preventDefault();
    console.log("Submit button clicked.")
    
    // use the provided sign in
    let input2 = $("form").serializeArray();
    console.log(input2);
    let inputJson = {};
  
    for(let i = 0; i < input2.length; i++){
      let name = input2[i]["name"];
      let value = input2[i]["value"];
      console.log(name + " " + value);
      inputJson[name] = value;
    }
  
    // HW read the data from the form
    console.log(inputJson["username"]);
    let email = inputJson["username"];
    let psw = inputJson["password"]
  
    firebase.auth().createUserWithEmailAndPassword(email, psw)
    .then(user => {
      console.log("success");
      
    })
    .catch(error =>{
      console.log(error.code);
      console.log(error.message);
    });
  
  
  
  });