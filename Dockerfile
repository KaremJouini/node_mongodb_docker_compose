FROM node:14.15-alpine
WORKDIR /usr/src/node_mongo_docker_compose/
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/node_mongo_docker_compose
RUN npm install
COPY . /usr/src/node_mongo_docker_compose