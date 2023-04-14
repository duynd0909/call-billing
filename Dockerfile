
FROM node:18-alpine
 
WORKDIR /user/src/app
 
COPY . .
 
RUN pnpm ci --omit=dev
 
RUN pnpm run build
 
USER node
 
CMD ["pnpm", "run", "start:dev"]