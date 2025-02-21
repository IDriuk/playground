import express from 'express';
import pg from 'pg';
const { Client } = pg

const app = express();
const PORT = 3000;

app.get('/', async (req, res)=>{
  const client = new Client({connectionString: "postgres://postgres:example@db:5432/dvdrental"})
  await client.connect()
  const data = await client.query('SELECT * from country')
  await client.end();

  res.status(200);
  res.send(JSON.stringify(data));
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);