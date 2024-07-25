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


// DELETE

module.exports = koalaRouter;