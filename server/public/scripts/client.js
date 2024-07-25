console.log( 'js' );
getKoalas();

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

  for(let koala of data) {
    document.getElementById('viewKoalas').innerHTML += `

      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td><button onClick="readyKoala(${koala.id})">Ready for Transfer</button></td>
        <td><button onClick="deleteKoala(${koala.id})">Delete</button></td>
      </tr>`;
    
  } // end of FOR loop
} // end of displayKoalas




// ============ UPDATE TRANSFER STATUS ==================
function readyKoala(koala_id) {
  axios ({
    method: 'PUT',
    url: `/koalas/${koala_id}`,
    data: {status: 'true'}
  })
  .then((response) => {
    getKoalas();
  })
  .catch((error) => {
    console.log('error updating Transfer status',error)
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

