
# Expess with postgress
Example of express.js app connected with postgres

## References
- [Project main page](https://github.com/IDriuk/playground)

## Notes
- use ```docker compose up```, open [localhost](http://localhost:3000/) or Thunder Client in vscode, open [adminer](http://localhost:8080/)
- use System: PostgreSQL, Server: db, Username: postgres, Password: example.


# Working log
- ```chmod +x restore.sh``` to use postgres commands


#!/bin/bash
# Запуск контейнера с Postgres и вход в bash
docker run -it -v ${PWD}:/rental --rm --network playground_default postgres bash -c "
    # Подключаемся к базе данных
    PGPASSWORD=example psql -h db -U postgres -c \"DROP DATABASE IF EXISTS dvdrental;\"
    PGPASSWORD=example psql -h db -U postgres -c \"CREATE DATABASE dvdrental;\"
    
    # Восстанавливаем базу данных из дампа
    pg_restore -d \"postgres://postgres:example@db:5432/dvdrental\" /rental/pgdump.tar
"

#  build . -t nextjs  
#  docker run -it -p 3000:3000 --rm --name nextcon nextjs;
FROM node
WORKDIR /app
COPY . .
RUN rm -rf node_modules 
RUN npm install
RUN chmod +x ./prisma-commands.sh
CMD ./prisma-commands.sh && npm run dev


#!/bin/sh
# Generate Prisma client
npx prisma generate
# Reset the database migrations
npx prisma migrate reset --force --skip-seed
npx prisma db push