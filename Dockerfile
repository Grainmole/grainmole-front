FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
