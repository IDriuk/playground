
# Postgres with docker compose

## References
- [Project main page](https://github.com/IDriuk/playground)

## Notes
- use ```docker-compose up``` and open http://localhost:8080/ for adminer. 
- use System: PostgreSQL, Server: db, Username: postgres, Password: example.

# Working log
- ```docker run -it -v ${PWD}:/rental  --rm --network playground_default postgres bash``` to use postgres commands
- ```psql -h db -U postgres``` connect to db
- ```DROP DATABASE IF EXISTS dvdrental;``` , ```CREATE DATABASE dvdrental;```, ```\q``` create some database
- ```pg_restore -d "postgres://postgres:example@db:5432/dvdrental" /rental/pgdump.tar``` restore database from dump