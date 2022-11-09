FROM node:19-alpine

WORKDIR /app

COPY ./website/package.json .

RUN npm install

COPY ./website .

EXPOSE 3000

CMD ["npm", "start"]
