 FROM node:12
 # 앱 디렉터리 생성
 WORKDIR /app
 # copy package.json
 COPY package.json .
 # 패키지 설치
 RUN npm install
 # pm2 설치
 RUN npm install -g pm2
 # dockerfile ㅇㅡㄹ 실행하는 경로에서 소스 복사
 COPY . .
 # pm2-runtime으로 실행
 CMD [ "npm", "start" ]
 #EXPOSE 8082
