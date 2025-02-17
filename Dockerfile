FROM node

WORKDIR /app
    
CMD ["/bin/bash", "-c", "npm install"]