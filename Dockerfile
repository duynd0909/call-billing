# Base image

FROM node:18




# Create app directory

WORKDIR /usr/src/app




# A wildcard is used to ensure both package.json AND pnpm-lock.json are copied

COPY package.json ./
COPY pnpm-lock.json ./




# Install app dependencies

RUN pnpm install




# Bundle app source

COPY . .




# Creates a "dist" folder with the production build

RUN pnpm run build




# Start the server using the production build

CMD [ "node", "dist/main.js" ]