const express = require('express');
const koalaRouter = express.Router();

const pool = require('../modules/pool.js')
let koalaList = []

// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "koalas"  
    `
    pool.query(queryText)
    .then(dbResult => {
        res.send(koalaList.rows)
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