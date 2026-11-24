# Estágio 1: instala as dependências
FROM node:22-slim AS deps
WORKDIR /app
COPY app/package*.json ./
RUN npm ci --omit=dev

# Estágio 2: imagem final, sem npm
FROM node:22-slim
WORKDIR /app
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx
COPY --from=deps /app/node_modules ./node_modules
COPY app/ .
USER node
EXPOSE 8000
CMD ["node", "server.js"]
