FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i && npx ng build && npm install http-server -g
COPY . .
EXPOSE 80
CMD ["http-server", "dist/grainmole"]
