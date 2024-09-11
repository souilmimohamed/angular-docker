FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist/test-angular/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf