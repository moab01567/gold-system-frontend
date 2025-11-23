FROM node:22.12.0 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=builder /app/dist /var/www/html
COPY ./goldsystem.conf /etc/nginx/conf.d/default.conf