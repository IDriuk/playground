
# Expess with postgress
Example of express.js app connected with postgres

## References
- [Project main page](https://github.com/IDriuk/playground)

## Notes
- use ```docker compose up```, open [localhost](http://localhost:3000/) or Thunder Client in vscode, open [adminer](http://localhost:8080/)
- use System: PostgreSQL, Server: db, Username: postgres, Password: example for adminer.
- open second terminal and run ```chmod +x restore_dump.sh && ./restore_dump.sh``` to restore dvd rental database.

## Working log
- ```docker network ls``` to check docker network name (pgnet), use it in restore_dump script.
- ```docker run -it -p 3000:3000 -v ${PWD}:/app --name server node``` run node container
- ```docker exec -it server bash``` open bash 
- ```npm install pg-promise```