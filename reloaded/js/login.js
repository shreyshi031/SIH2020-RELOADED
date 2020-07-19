const inp = document.getElementById('inp')
inp.addEventListener('click', loggin)

function loggin()
{
// login
//const loginForm = document.querySelector('#loginForm');
  // get user info
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;


  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    console.log(cred)

  }).catch(err => {
  console.log("Can't sign in"+err)
  });

}
