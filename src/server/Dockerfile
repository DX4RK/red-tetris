FROM node:lts-slim

LABEL version="5.0.0"
LABEL description="Example Fastify (Node.js) webapp Docker Image"

ENV CI=true

RUN apt-get update && apt-get upgrade -y && apt-get autoclean -y && apt-get autoremove -y

RUN groupadd -r nodejs && useradd -g nodejs -s /bin/bash -d /home/nodejs -m nodejs
RUN corepack enable && corepack prepare pnpm@11.21.0 --activate

USER nodejs
RUN mkdir -p /home/nodejs/app/node_modules && chown -R nodejs:nodejs /home/nodejs/app
WORKDIR /home/nodejs/app

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY --chown=nodejs:nodejs package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile && pnpm cache clean

COPY --chown=nodejs:nodejs . .

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=5s CMD pnpm run healthcheck-manual

CMD [ "pnpm", "dev" ]
