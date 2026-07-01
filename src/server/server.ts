import Fastify from 'fastify';
import fastifyEnv from '@fastify/env';
import fastifySocketIO from 'fastify-socket.io';
import loggerConfig from './config/logger.json' with { type: 'json' };
import { schema } from './config/env.schema.js';
import { registerSockets } from './sockets/index.js';

export async function buildServer() {
  const fastify = Fastify({ logger: loggerConfig });

  await fastify.register(fastifyEnv, { schema, dotenv: true });

  await fastify.register(fastifySocketIO as any, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  fastify.get('/', async () => ({ hello: 'world' }));

  fastify.ready((err) => {
    if (err) throw err;
    registerSockets(fastify);
  });

  return fastify;
}
