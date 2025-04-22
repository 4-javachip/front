FROM node:18-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm

COPY . .
RUN pnpm install && pnpm build
FROM node:18-alpine
WORKDIR /app

RUN npm install -g pnpm
COPY --from=builder /app ./

EXPOSE 3100

CMD ["pnpm", "start"]
