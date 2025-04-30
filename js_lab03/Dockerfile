FROM node:23.4-alpine
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm ci
COPY ./prisma ./
RUN npx prisma generate
COPY ./ ./
RUN npm run build
EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]
