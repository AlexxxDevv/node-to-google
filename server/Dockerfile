FROM node:20-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install -g npm@11.0.0
RUN npm i
COPY . ./
RUN npm run build
RUN npm i -g pm2
COPY ./ecosystem.config.js ./

ENTRYPOINT [ "pm2-runtime", "start", "ecosystem.config.js" ]