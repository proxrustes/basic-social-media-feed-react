FROM node:16-alpine AS runner
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "run", "start"]