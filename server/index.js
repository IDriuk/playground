import express from 'express';
import path from 'path';
import pg from 'pg';
import cors from 'cors'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Client } = pg

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', async (req, res)=>{
  const client = new Client({connectionString: "postgres://postgres:example@db:5432/dvdrental"})
  await client.connect()
  const data = await client.query('SELECT * from country');
  await client.end();

  res.status(200);
  res.send(JSON.stringify({quotes: data.rows}));
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);