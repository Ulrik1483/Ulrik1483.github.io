  const config = {
    apiKey: "AIzaSyAjh3-5FEqEe-BbRap8aJzcDXbJAt9WrBI",
    authDomain: "fittekuk-e760e.firebaseapp.com",
    databaseURL: "https://fittekuk-e760e.firebaseio.com",
    projectId: "fittekuk-e760e",
    storageBucket: "fittekuk-e760e.appspot.com",
    messagingSenderId: "1075370606661"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogout");

  btnLogin.addEventListener("click", e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message))

  });

  btnSignUp.addEventListener("click", e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    const promise = auth.createUserEmailAndPassword(email, pass);
    promise
      .catch(e => console.log(e.message))
  });

  btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
  })

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove("hide")
    }
    else {
      console.log('not logged in');
    }
  })




  <script src="https://www.gstatic.com/firebasejs/5.8.0/firebase.js"></script>
  <script>
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAjh3-5FEqEe-BbRap8aJzcDXbJAt9WrBI",
      authDomain: "fittekuk-e760e.firebaseapp.com",
      databaseURL: "https://fittekuk-e760e.firebaseio.com",
      projectId: "fittekuk-e760e",
      storageBucket: "fittekuk-e760e.appspot.com",
      messagingSenderId: "1075370606661"
    };
    firebase.initializeApp(config);

    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, pass);
    auth.createUserWithEmailAndPassword(email, pass);
    auth.onAuthStateChanged(firebaseUser => {});
    </script>
