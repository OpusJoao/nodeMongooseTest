FROM node:16

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm ci --omit=dev --silent --no-audit

EXPOSE 8081

CMD [ "node", "index.js"]