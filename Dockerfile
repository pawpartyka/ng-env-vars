FROM node as builder

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

FROM nginx

COPY ./nginx /etc/nginx
COPY --from=builder /usr/src/app/dist/ng-env-example /usr/share/nginx/html

EXPOSE 80

CMD nginx -g 'daemon off;'
