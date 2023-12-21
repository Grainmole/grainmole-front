FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
RUN npm install http-server -g
COPY . .
EXPOSE 80
CMD ["npx", "ng", "build", "&&", "http-server", "dist/grainmole"]
