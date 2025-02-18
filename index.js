import { createServer } from 'node:http';
import pg from 'pg';

const { Client } = pg
const hostname = '0.0.0.0';
const port = 3000;

const server = createServer(async (req, res) => {
  const client = new Client({connectionString: "postgres://postgres:example@db:5432/dvdrental"})
  await client.connect()
  const data = await client.query('SELECT * from country')
  await client.end()

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
