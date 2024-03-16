const firebaseConfig = {
  apiKey: "AIzaSyCtHnjMCVkoe8OxRoi8OuVuUgf_x2e0tSg",
  authDomain: "hack-a-map-13d5c.firebaseapp.com",
  databaseURL: "https://hack-a-map-13d5c-default-rtdb.firebaseio.com",
  projectId: "hack-a-map-13d5c",
  storageBucket: "hack-a-map-13d5c.appspot.com",
  messagingSenderId: "497768924727",
  appId: "1:497768924727:web:57c09f89addd6de1a2e1b2",
  measurementId: "G-TDFM7E8PT1"
};
  
firebase.initializeApp(firebaseConfig);

var userinfoDB = firebase.database().ref('UserInfo');

document.getElementById('tripForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  var sourceCity = getElementVal('sourceCity');
  var destinationCity = getElementVal('destinationCity');
  var budget = getElementVal('budget');
  var duration = getElementVal('duration');
  console.log(sourceCity, destinationCity, budget, duration);
  savedMsgs(sourceCity, destinationCity, budget, duration);
}

const savedMsgs = (sourceCity, destinationCity, budget, duration) => {
  var newContact = userinfoDB.push();
  newContact.set({
    sourceCity: sourceCity,
    destinationCity: destinationCity,
    duration: duration,
    budget: budget
  });
};
  
const getElementVal = (id) => {
  return document.getElementById(id).value;
};