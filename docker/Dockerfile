FROM node:14.17.0
WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json yarn.lock ./

RUN yarn install
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]