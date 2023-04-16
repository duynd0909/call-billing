# Base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND pnpm-lock.json are copied
COPY package.json ./
COPY pnpm-lock.yaml ./

#Install pnpm
RUN npm install -g pnpm

# Install app dependencies
RUN pnpm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN pnpm run build

# Start the server using the build
CMD [ "node", "dist/main.js" ]