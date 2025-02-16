
# Playground
Project for experimenting with different technologies and testing tasks.

## References
- [React router app with Docker for development](https://github.com/IDriuk/playground/tree/react_router_dev)
- [Postgres with docker compose](https://github.com/IDriuk/playground/tree/postgres_dev)
- [Express.js with docker compose](https://github.com/IDriuk/playground/tree/express_dev)

## Notes
- use ```reset --hard HEAD```
- use ```git clean -fd``` to remove unused files after brunch switching
- use ```git push --delete origin react_app_dev`` to remove remote branch on github
- use ```git branch -D react_app_dev``` to remove local branch on github
- use ```docker stop $(docker ps -aq)``` and ```docker system prune -a``` to remove containers and images