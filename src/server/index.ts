import { buildServer } from './server.js';

const start = async () => {
  const fastify = await buildServer();
  const port = Number(fastify.config.PORT);
  await fastify.listen({
    port,
    host: '0.0.0.0',
  });
};

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
