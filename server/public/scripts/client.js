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
  event.preventDefault();
  console.log("Submit Button Clicked");
  let name = document.getElementById('nameIn').value;
  let age = document.getElementById('ageIn').value;
  let color = document.getElementById('colorIn').value;
  let readyForTransfer = document.getElementById('readyForTransferIn').value;
  let notes = document.getElementById('notesIn').value;
  console.log("Variables Match:", name, age, color, readyForTransfer,notes);
}
