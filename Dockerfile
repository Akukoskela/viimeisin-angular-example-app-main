# Stage 1: Build the Angular application
FROM node:latest as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --prod

# Stage 2: Set up the server
FROM nginx:alpine
COPY --from=build /app/dist/angular-example-app /usr/share/nginx/html
