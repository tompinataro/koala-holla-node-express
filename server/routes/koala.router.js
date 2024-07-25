const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js')

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
koalaRouter.put ('/:koala_id', (req, res) => {
    const koalaToChange = req.params.koala_id;
    
    const sqlText = `
        UPDATE "koalas"
            SET "ready_to_transfer" = TRUE
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

module.exports = koalaRouter;