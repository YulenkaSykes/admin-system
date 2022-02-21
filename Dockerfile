FROM node:16.13.0

WORKDIR /app

COPY package.json .

RUN npm install -g npm@8.3.0

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]