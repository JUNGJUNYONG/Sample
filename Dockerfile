 FROM node:12
 
 WORKDIR /app
 COPY package.json .
 RUN npm install && npm install -g pm2
 COPY . .
 CMD [ "npm", "start" ]
 EXPOSE 8082
