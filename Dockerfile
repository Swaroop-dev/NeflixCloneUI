FROM node:16-alpine as prod
WORKDIR /app
COPY ./package.json .
RUN npm install 
COPY . .
RUN npm run build

FROM nginx
COPY --from=prod /app/build /usr/share/nginx/html
