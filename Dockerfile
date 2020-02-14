FROM nginx
RUN mkdir /app
COPY ./dist /app/urpm-font
COPY nginx.conf /etc/nginx/nginx.conf