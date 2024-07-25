console.log( 'js' );
getKoalas();

// ~~~~~~~~~~~ NOTE: console.logs made here are displayed on browser!!!!!!
// ===================== GET FUNCTION =====================

function getKoalas() {

  axios({
    method: 'GET',
    url: '/koalas'
  })

  .then((response) => {
    let koalaData = response.data;
    console.log('This is the koala data we GET from server:', koalaData);

    displayKoalas(koalaData);
  })

  .catch((err) => {
    console.log('Error in getting data!', err);
  })

} // end of getKoalas

// ===================== DISPLAY IN HTML FUNCTION =====================

function displayKoalas(data) {
  console.log('This is the data to be displayed. Is this correct?:', data);
  let viewKoalas = document.getElementById('viewKoalas');

  // IF ready_to_transfer === true, 'Ready for Transfer' button doesn't exist
  // ELSE, 'Ready for Transfer' button exists
  viewKoalas.innerHTML = '';
  for(let koala of data) {

    console.log(`Is ${koala.name} ready to transfer? ${koala.ready_to_transfer}`);
    if(koala.ready_to_transfer === true) {
      viewKoalas.innerHTML += `

      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td></td>
        <td><button onClick="deleteKoala(${koala.id})">Delete</button></td>
      </tr>`;
    
    } else {
      viewKoalas.innerHTML += `

      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td><button onClick="readyKoala(${koala.id})">Ready for Transfer</button></td>
        <td><button onClick="deleteKoala(${koala.id})">Delete</button></td>
      </tr>`;

    } // end of IF statement
    
  } // end of FOR loop
} // end of displayKoalas

// ===================== DELETE FUNCTION (Needs getKoalas function in .then) =====================

function deleteKoala(koalaId) {
  console.log('This is the koala\'s id in client:', koalaId);

  axios({
    method: 'DELETE',
    url: `/koalas/${koalaId}`
  })

  .then((response) => {
    console.log(`${koalaId} has been deleted:`, response);

    getKoalas();
  })

  .catch((err) => {
    console.log(`${koalaId} did not get deleted:`, err);
  })
}





// ===================== BUTTON && POST FUNCTION =====================

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

