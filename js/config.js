(function(){
	 // Initialize Firebase
  const  config = {
    apiKey: "AIzaSyA7q4KYx16e7D1zJIBExl5nCtxa87ccNv8",
    authDomain: "hpbio-e7616.firebaseapp.com",
    databaseURL: "https://hpbio-e7616.firebaseio.com",
    projectId: "hpbio-e7616",
    storageBucket: "hpbio-e7616.appspot.com",
    messagingSenderId: "76907085157"
  };
  firebase.initializeApp(config);

//get elements login  
const txtEmail= document.getElementById("txtEmail");
const txtPass = document.getElementById("txtPass");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
//get elements registration 
const txtUname = document.getElementById("txt_Uname");
const txtUmail = document.getElementById("txt_Umail");
const txtUpass= document.getElementById("txt_Upass");
const btnSubmit = document.getElementById("btnSubmit");

//Login event 
btnLogin.addEventListener('click', e=> {
  //get email and pass 
  const email = txtEmail.value;
  const pass = txtPass.value;
  const auth = firebase.auth;

  //for sign in - login 
  const promise= auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
});

//Register event 
btnSubmit.addEventListener('click', e=> {
 //get email and pass 
  const nameU = txt_Uname.value
  const emailU = txt_Umail.value;
  const passU = txt_Upass.value;
  const auth = firebase.auth;

  //for sign in - login 
  const promise= auth.createUserWithEmailAndPassword(emailU,passU);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e=>{
firebase.auth.signOut();
});

//add realtime listener 
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  }else{
    console.log("not logged in!");
    btnLogout.classList.add('hide');
  }
});
});