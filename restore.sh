#!/bin/bash

set -e

# Wait for PostgreSQL to start
echo "Waiting for PostgreSQL to start..."
until pg_isready -U postgres; do
  sleep 2
done

# Restore the database if db.tar exists
if [ -f /docker-entrypoint-initdb.d/db.tar ]; then
  echo "Restoring database from backup..."
    PGPASSWORD=example psql -h localhost -U postgres -c "DROP DATABASE IF EXISTS dvdrental;"
    PGPASSWORD=example psql -h localhost -U postgres -c "CREATE DATABASE dvdrental;"
    PGPASSWORD=example pg_restore -U postgres -d dvdrental -c /docker-entrypoint-initdb.d/db.tar
  echo "Database restoration complete."
else
  echo "No backup file found, skipping restore."
fi

# Start the default PostgreSQL entrypoint
exec docker-entrypoint.sh postgres
