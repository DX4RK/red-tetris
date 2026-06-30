import Fastify from 'fastify'
import fastifyEnv from '@fastify/env'
import fastifySocketIO from 'fastify-socket.io'

import loggerConfig from './config/logger.json' with { type: 'json' }

const fastify = Fastify({
  logger: loggerConfig,
})

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: '3000',
    },
  },
}

const start = async () => {
  await fastify.register(fastifyEnv, {
    schema,
    dotenv: true,
  })

  fastify.register(fastifySocketIO as any, {})
  fastify.get('/', async () => {
    return { hello: 'world' }
  })

  const port = Number(fastify.config.PORT)
  await fastify.listen({ port })
}

start().catch((err) => {
  fastify.log.error(err)
  process.exit(1)
})
