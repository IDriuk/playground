
# Expess with postgress
Example of express.js app connected with postgres

## References
- [Project main page](https://github.com/IDriuk/playground)

## Notes
- use ```docker compose up``` , open [localhost](http://localhost:3000/) or Thunder Client in vscode

## Working log
- ```docker run -it -p 3000:3000 -v ${PWD}:/app --name server node``` run node container
- ```docker exec -it server bash``` open bash 
- ```npm init```
- ```npm install express```
- create index.js file 
- ```node .```