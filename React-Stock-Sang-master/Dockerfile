FROM node:21-alpine3.18
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package*.json .
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]
