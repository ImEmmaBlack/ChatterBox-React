FROM node:8

WORKDIR /src/app
COPY package.json package-lock.json ./
RUN ["npm", "install"]
COPY . .
CMD ["npm", "start"]
