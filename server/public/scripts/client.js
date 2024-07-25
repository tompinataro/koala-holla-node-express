console.log( 'js' );

function getKoalas(){
  console.log( 'in getKoalas' );
  // axios call to server to get koalas
  
} // end getKoalas

function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}

getKoalas();

function addKoala (event){
//2.gather input information in variables
  event.preventDefault();
  console.log("Submit Button Clicked");
  let name = document.getElementById('nameIn').value;
  let age = document.getElementById('ageIn').value;
  let color = document.getElementById('colorIn').value;
  let readyForTransfer = document.getElementById('readyForTransferIn').value;
  let notes = document.getElementById('notesIn').value;
  console.log("Variables Match:", name, age, color, readyForTransfer,notes);

  //3.put variables into object (creates object)
let incomingKoalas = {
  name: name,
  favorite_color: color,
  age: age,
  ready_to_transfer:readyForTransfer,
  notes: notes
}
  console.log("incomingObject:", incomingKoalas);

  //4.sends object to server.js using axios
  axios({
    method: 'POST',
    url: '/koalas',
    data: incomingKoalas
  }).then(function(response) {
    console.log(response.data);

//insert function() from Jen & Elwood's GET route here

  }).catch(function(error) {
    console.log('error in KoalasPOST', error); 
    alert('Error adding koala object. Please try again later.')       
  });


}

