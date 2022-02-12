FROM node:latest as build
WORKDIR /usr/app
COPY ./ /usr/app/
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/app/dist/freelance-frontend /usr/share/nginx/html
EXPOSE 4200

