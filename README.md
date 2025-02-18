
# Node.js with pg driver
Explore node.js  with pg (node-postgres) driver for postgres

## References
- [Project main page](https://github.com/IDriuk/playground)
- [node-postgres docs](https://node-postgres.com/)
- [node.js docs](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

## Notes
- use ```docker compose up```, open [localhost](http://localhost:3000/) or Thunder Client in vscode, open [adminer](http://localhost:8080/)
- use System: PostgreSQL, Server: db, Username: postgres, Password: example for adminer.
- open second terminal and run ```chmod +x restore_dump.sh && ./restore_dump.sh``` to restore dvd rental database.

## Working log
- ```docker run -it -p 3000:3000 -v ${PWD}:/app --name server node``` run node container
- ```docker exec -it server bash``` open bash 
- ```npm install pg```
- ```docker stats``` to find container to connect