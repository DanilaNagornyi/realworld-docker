FROM node:22.19.0-alpine

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .
