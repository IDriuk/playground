import express from 'express';
import path from 'path';
import pg from 'pg';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import session from 'express-session';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { Client } = pg

const app = express();
const port = process.env.PORT || 3000;

let pgUser  = process.env.POSTGRES_USER || 'postgres'
let pgPassword = process.env.POSTGRES_PASSWORD || 'example'
let pgHostPort = process.env.POSTGRES_HOST_PORT || 'db:5432'
let pgDb = process.env.POSTGRES_DB || 'dvdrental'
const pgUrl = `postgres://${pgUser}:${pgPassword}@${pgHostPort}/${pgDb}`;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const sessionMiddleware = session({
  secret: "changeit",
  resave: true,
  saveUninitialized: true,
});
io.engine.use(sessionMiddleware);
app.use(sessionMiddleware);
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.post("/incr", (req, res) => {
  console.log('session ===============', req.session)
  const session = req.session
  session.count = (session.count || 0) + 1
  res.status(200)
  res.send(`session count ${session.count}`)

  console.log('session.count ===============', session.count)
  io.to(session.id).emit("current count", session.count)
})

app.post("/logout", (req, res) => {
  const sessionId = req.session.id;
  req.session.destroy(() => {
    // disconnect all Socket.IO connections linked to this session ID
    io.to(sessionId).disconnectSockets();
    res.status(204).end();
  });
});

io.on("connection", (socket) => {
  const req = socket.request;

  socket.join(req.session.id);

  socket.on("incr", (cb) => {
    req.session.reload((err) => {
      console.log('req.session ====2', req.session.count)
      if (err) {
        // session has expired
        return socket.disconnect();
      }
      req.session.count = (req.session.count || 0) + 1;
      req.session.save(() => {
        cb(req.session.count);
      });
    });
  });
});

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

httpServer.listen(port, (error) =>{
  if(!error)
      console.log("Server is Successfully Running, and App is listening on port "+ port)
  else 
      console.log("Error occurred, server can't start", error);
  }
);