FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
EXPOSE 80
CMD ["npx", "ng", "build", "&&", "npx", "http-server", "dist/grainmole"]
