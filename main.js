// const firebaseConfig = {
//     apiKey: "AIzaSyD4VWiFJtxccAxSycEeOnqqXybM1Pc6BkA",
//     authDomain: "mansoorprotfolio.firebaseapp.com",
//     projectId: "mansoorprotfolio",
//     storageBucket: "mansoorprotfolio.firebasestorage.app",
//     messagingSenderId: "358193576379",
//     appId: "1:358193576379:web:d3616610400f481e866c9e",
//     measurementId: "G-MY053V46LT"
// };

// firebase.initializeApp(firebaseConfig);

// var MansoorPortfolioDB = firebase.database().ref('MansoorPortfolio');

// document.getElementById("contact-form-section").addEventListener("submit",submitForm);

// function submitForm(e){
//     e.preventDefault();

//     var name = getElementVal('name');
//     var emailid = getElementVal('email');

//     // console.log(name, email) ;

//     saveNessages(name, email);
// }

// const saveNessages =( name, email) =>{
//     var newMansoorPortfolio= MansoorPortfolioDB.push();

//     newMansoorPortfolio.set({
//         name : name,
//         email : email,
//     });
// }

// const getElementVal = (id) => {
//     return document.getElementById(id).value;
// }