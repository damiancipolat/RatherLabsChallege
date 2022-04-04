FROM node:16.0.0-alpine
LABEL Maintainer="Damian Cipolat"
WORKDIR /usr/src/app
COPY . .
RUN ls -a
RUN npm install
RUN npm run build
RUN ls -a
EXPOSE 8000
CMD [ "node", "./dist/index.js" ]