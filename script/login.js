import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBv2RJq1MATT-RsRzG6emHpqrN-JLmxdg8",
    authDomain: "login-signup123.firebaseapp.com",
    projectId: "login-signup123",
    storageBucket: "login-signup123.appspot.com",
    messagingSenderId: "992420484301",
    appId: "1:992420484301:web:50ea1991dc67a818218584",
    measurementId: "G-L9MVJ38G0M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



const login =()=> {
  const email = document.getElementById("email");
  const password = document.getElementById("password");


  console.log(email.value, password.value);

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    
      const user = userCredential.user;
      console.log("user--->", user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error message",errorMessage)
    });



}
let loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click" , login)
