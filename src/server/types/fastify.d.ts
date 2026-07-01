import 'fastify'
import type { Server } from "socket.io"

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: string
    },
    io: Server
  }
}
