#!/bin/bash
docker run -it -v ${PWD}/db:/rental --rm --network pgnet postgres bash -c "
    PGPASSWORD=example psql -h db -U postgres -c \"DROP DATABASE IF EXISTS dvdrental;\"
    PGPASSWORD=example psql -h db -U postgres -c \"CREATE DATABASE dvdrental;\"
    pg_restore -d \"postgres://postgres:example@db:5432/dvdrental\" /rental/pg_dump.tar
"