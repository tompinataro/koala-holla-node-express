const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pool = require('../modules/pool.js')

// ~~~~~~~~~~~ NOTE: console.logs made here are displayed in terminal!!!!!!
// GET
koalaRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "koalas"
        ORDER BY "name";  
    `
    pool.query(queryText)
    .then(dbResult => {
        res.send(dbResult.rows)
    })
    .catch(dbError => {
        console.log('sql query error',dbError);
        res.sendStatus(500);
    })
})


// POST

koalaRouter.post('/', (req, res) => {
    console.log('POST received a request!');
    console.log('\treq.body is:', req.body);

  
    const sqlText = `
      INSERT INTO "koalas" 
        ("name", "favorite_color", "age", "ready_to_transfer", "notes") 
        VALUES
        ($1, $2, $3, $4, $5);
    `;
    const sqlValues = [
      req.body.name,
      req.body.favorite_color,
      req.body.age,
      req.body.ready_to_transfer,
      req.body.notes
    ];
    pool.query(sqlText, sqlValues)
      .then((dbResult) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log('SQL query in POST /koalas error:', dbErr);
        res.sendStatus(500);
      })
    
  });


// PUT
koalaRouter.put ('/:koala_id', (req, res) => {
    const koalaToChange = req.params.koala_id;
    
    const sqlText = `
        UPDATE "koalas"
            SET "ready_to_transfer" = NOT ready_to_transfer
            WHERE "id" = $1;
            `
    const sqlValues = [koalaToChange]
    pool.query(sqlText, sqlValues)
    .then(dbResult => {
        res.sendStatus(200);
    })
    .catch(dbError => {
        console.log('db error updating status',dbError);
        res.sendStatus(500);
    })
})

// DELETE
koalaRouter.delete('/:id', (req, res) => {

    const koalaId = req.params.id;
    console.log('The id from DELETE request:', koalaId);
    
    const sqlText = `DELETE FROM "koalas"
                    WHERE "id" = $1;`;

    const sqlValue = [koalaId];

    pool.query(sqlText, sqlValue)
    .then(dbResult => {
        res.sendStatus(200);
    })
    .catch(dbError => {
        res.sendStatus(500);
    })

})

module.exports = koalaRouter;