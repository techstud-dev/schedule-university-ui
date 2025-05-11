FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --silent

COPY . .
RUN npm run build

FROM nginx:1.25-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

RUN apk add --no-cache curl && \
    sed -i 's/keepalive_timeout  65;/keepalive_timeout  10;/g' /etc/nginx/nginx.conf && \
    sed -i 's/#gzip/gzip/g' /etc/nginx/nginx.conf && \
    rm -rf /usr/share/nginx/html/static/js/*.map && \
    rm -rf /usr/share/nginx/html/static/css/*.map

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]