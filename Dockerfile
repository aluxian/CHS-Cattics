FROM node:5.11
MAINTAINER Alexandru Rosianu <me@aluxian.com

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install
RUN npm install -g bower grunt
RUN bower install

CMD [ "node", "server.js" ]

EXPOSE 3000
