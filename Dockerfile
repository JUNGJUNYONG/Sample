 FROM node:12
 
 WORKDIR /app
 COPY package.json .
 RUN npm install && npm install -g pm2
 COPY . .
 CMD [ "pm2", "start","app.js" "-i","max" ]
 EXPOSE 8082
