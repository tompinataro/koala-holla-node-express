const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const koalaRouter = require('./routes/koala.router');

app.use(express.json());
app.use(express.static('server/public'));

// 5. ROUTES Server.js receives requests and passes them to koala router
app.use('/koalas', koalaRouter);

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
