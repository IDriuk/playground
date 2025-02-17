#!/bin/bash
# Запуск контейнера с Postgres и вход в bash
docker run -it -v ${PWD}:/rental --rm --network playground_default postgres bash -c "
    # Подключаемся к базе данных
    PGPASSWORD=example psql -h db -U postgres -c \"DROP DATABASE IF EXISTS dvdrental;\"
    PGPASSWORD=example psql -h db -U postgres -c \"CREATE DATABASE dvdrental;\"
    
    # Восстанавливаем базу данных из дампа
    pg_restore -d \"postgres://postgres:example@db:5432/dvdrental\" /rental/pg_dump.tar
"