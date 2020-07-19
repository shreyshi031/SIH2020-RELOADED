const inp = document.getElementById('inp')
inp.addEventListener('click', writeData)

function writeData() {
  console.log("Button clicked")
  //personal details
  var first = document.getElementById("first").value;
  var last  = document.getElementById("last").value;
  var mobile = document.getElementById("mob").value;
  var email = document.getElementById("email").value;

  var gender = document.getElementById("gender").value;
  //contact details

  var address=document.getElementById("address").value;
  var city = document.getElementById("state").value;
  var aadhar =document.getElementById("aadhar").value;


  //password
  var password = document.getElementById("pass").value;


  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred)
    return db.collection('test').doc(cred.user.uid).set({

      candidate_Name: first+' '+last,
      Gender:         gender,
      Address:        address,
      City:           city,
      aadhar:        aadhar,
      Email:          email,
      Mobile:         mobile,

    });
  }).then(ref => {
    // close the signup modal & reset form
    console.log("User added successfully with reference \n" + ref)
    db.collection("test").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        auth.signOut();
       window.location.href = "index.html";
      });
    });
  }).catch(err => {
    console.log("Error adding user\n" + err)
  });

}
