# Chat

Chat app with Vue client, Express server and Postgres database.

## How to use

```shell
$ docker-compose -f compose.prod.yaml up -d
$ docker-compose -f compose.prod.yaml down
```

Then go to http://localhost:8080

## Development

```shell
$ docker-compose up
```
- [client](http://localhost:5173)
- [adminer](http://localhost:8080) (user: postgres, password: changeit)
- [Thunder client](http://localhost:3000/self) (use HTTP Headers Cookie:sid="from browser devtools")

Run tests
```shell
$ docker exec -it express_container bash
$ cd app
$ npm run test
```

Open postgres in terminal
```shell
$ docker exec -it pg_container bash
$ psql -U postgres
```

Get ip for wifi (like 192.168.1.5) to browse from phone
```shell
$ ifconfig | grep inet
```