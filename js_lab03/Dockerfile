FROM node:23.4-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./prisma ./prisma
COPY . .
RUN npm run build

FROM node:23.4-alpine
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma
COPY public ./public
RUN npm ci --omit=dev
RUN npx prisma generate
COPY --from=builder /app/dist ./dist
EXPOSE 8080
CMD ["npm", "run", "start"]



