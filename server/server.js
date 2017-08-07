require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT

// This will serve static files from our build folder
app.use(express.static(`${__dirname}/../build`));


// All Other EndPoints


// This is to work browser history instead of hash history.
// It needs to be at the end of your endpoints.
// If it requests an endpoint that doesn't match another get endpoint
// send back the index.html file, that will then load the other pages

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, '..','build', 'index.html'));
})

app.listen(port, ()=>console.log("Listening on port: ", port));
