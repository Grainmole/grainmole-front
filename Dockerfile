FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npx ng build
EXPOSE 80
CMD ["npx", "http-server", "-p", "80", "dist/grainmole"]
