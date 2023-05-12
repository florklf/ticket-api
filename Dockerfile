FROM node:18.16-alpine AS development
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV production
RUN npx prisma generate && \
    npm run build


FROM node:18.16-alpine AS production
WORKDIR /app
COPY --from=development /app/node_modules ./node_modules
COPY --from=development /app/package*.json ./
COPY --from=development /app/dist ./dist
COPY --from=development /app/prisma ./prisma
RUN npm cache clean --force
EXPOSE 3000
CMD ["npm", "run", "start:migrate:prod"]