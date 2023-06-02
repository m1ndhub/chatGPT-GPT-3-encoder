# Use a Node.js base image
FROM node:14

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080


CMD [ "sh", "-c", "node app.js" ] 
