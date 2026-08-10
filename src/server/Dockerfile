FROM node:22-alpine

WORKDIR /app

ENV CI=true
ENV PNPM_CONFIG_CONFIRM_MODULES_PURGE=false

RUN corepack enable && corepack prepare pnpm@11.21.0 --activate

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]
