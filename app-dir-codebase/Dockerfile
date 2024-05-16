
FROM node:20-alpine AS deps2
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json .
RUN npm install --no-lockfile

FROM node:20-alpine AS builder2
WORKDIR /app
COPY . ./
RUN rm -rf node_modules
COPY --from=deps2 /app/node_modules ./node_modules
RUN npm run build

FROM node:20-alpine AS runner2
ENV NEXT_TELEMETRY_DISABLED 1

#COPY --from=builder2 /app/next.config.js ./
#COPY --from=builder2 /app/package.json ./package.json
COPY --from=builder2 /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder2 /app/.next/standalone ./
COPY --from=builder2 /app/.next/static ./.next/static

ENV PORT 3000
EXPOSE 3000

CMD ["node","server.js"]