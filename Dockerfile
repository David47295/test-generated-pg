FROM node:10.14.1-alpine
WORKDIR /usr/src/app
COPY ./ ./
RUN ls
RUN npm install &&\
    apk update &&\
    apk upgrade
RUN npm run build
COPY . .
EXPOSE  8080
CMD ["npm", "start"]