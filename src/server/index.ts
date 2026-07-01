import { buildServer } from './server.js';

const start = async () => {
  const fastify = await buildServer();
  const port = Number(fastify.config.PORT);
  await fastify.listen({ port });
};

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
