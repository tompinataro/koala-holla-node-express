const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool.js');

// GET from Elwood & Jen


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


// DELETE

module.exports = koalaRouter;