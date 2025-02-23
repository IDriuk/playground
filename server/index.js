import express from 'express';
import path from 'path';
import pg from 'pg';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Client } = pg

const app = express();
const PORT = 3000;

let pgUser  = process.env.POSTGRES_USER || 'postgres'
let pgPassword = process.env.POSTGRES_PASSWORD || 'example'
let pgHostPort = process.env.POSTGRES_HOST_PORT || 'db:5432'
let pgDb = process.env.POSTGRES_DB || 'dvdrental'
const pgUrl = `postgres://${pgUser}:${pgPassword}@${pgHostPort}/${pgDb}`;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/quotes', async (req, res)=>{
  const client = new Client({connectionString: pgUrl})
  await client.connect()
  const data = await client.query('SELECT * from country');
  await client.end();

  res.status(200);
  res.send(JSON.stringify({quotes: data.rows}));
});

app.get('/api/quotes/:id', async (req, res)=>{
  res.send(JSON.stringify({country_id: 1, last_update: 5, country: 'country 123'}));
});

app.post('/api/quotes', async (req, res) => {
  res.status(200)
  res.send('Created quote')
})

app.put('/api/quotes/:id', async (req, res) => {
  res.status(200)
  res.send('Updated quote')
})

app.delete('/api/quotes/:id', function(req, res){
  res.send('Deleted quote');
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);