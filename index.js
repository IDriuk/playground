const express = require('express');
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:example@db:5432/dvdrental')

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
  db.many('SELECT * from country')
  .then((data) => {
    console.log('DATA:', data)

    res.status(200);
    res.send("Welcome to root URL of Server" + JSON.stringify(data));
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);