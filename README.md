# Redux toolkit template with Express.js and postgres.
Example from vite-template-redux with express.js and pg.

## References
- [Project main page](https://github.com/IDriuk/playground)
- [node-postgres docs](https://node-postgres.com/)

## Notes
- use ```docker compose up```, 
- open [api endpoint](http://localhost:3000/) for Thunder Client in vscode to test api.
- open [adminer](http://localhost:8080/) to admin db with adminer.
- open [vite dev server](http://localhost:5173/).
- use System: PostgreSQL, Server: db, Username: postgres, Password: example for adminer.
- open second terminal and run ```chmod +x db/restore_dump.sh && db/restore_dump.sh``` to restore dvd rental database.
- build client and copy files from client/dist to server/public for production
- use [Render app url](https://playground-pb7l.onrender.com/) for production hosting

## Working log
- open [render dashboard](https://dashboard.render.com/)
- New Web Service, Github open repo, Branch: redux_express_postgres, Language: Node, Root directory: server 
- open [app on render](https://playground-pb7l.onrender.com/)
- new postgres service render_postgres
- add some data to postgres