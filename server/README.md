
# Expess.js app
Example of express.js app

## References
- [Project main page](https://github.com/IDriuk/playground)

## Notes
- use ```docker compose up``` , open [localhost](http://localhost:3000/)

## Working log
- ```docker run -it -p 3000:3000 -v ${PWD}:/app --name server node``` run node container
- ```docker exec -it server bash``` open bash 
- ```npm init```
- ```npm install express```
- create index.js file 
- ```node .```

## Issues
- HTTP session works correctly if the client and server are on the same host and port.