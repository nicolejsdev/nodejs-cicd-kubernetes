FROM node:22-slim

WORKDIR /app

COPY app/package*.json ./
RUN npm ci --omit=dev

COPY app/ .

USER node

EXPOSE 8000
CMD ["node", "server.js"]
