FROM node:16.0.0-alpine
LABEL Maintainer="Damian Cipolat"
ENV APP_DIR rather_challenge
ENV TZ=America/Buenos_Aires
WORKDIR /usr/app/${APP_DIR}
COPY package*.json ./
COPY jest.config.js ./
COPY .env ./
RUN npm install -g jest
RUN npm install
RUN npm test
RUN npm build
COPY ./build .
EXPOSE 8000
CMD [ "npm" , "start" ]