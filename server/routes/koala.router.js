const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js')

// ~~~~~~~~~~~ NOTE: console.logs made here are displayed in terminal!!!!!!
// GET
koalaRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "koalas"  
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


// PUT


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