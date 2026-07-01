import type { FastifyInstance } from "fastify";
import { authMiddleware } from "./middleware.js";
import { handleConnection } from "./handlers/connection.js";
// import { registerGameHandlers } from "./handlers/game";
// import { registerLeaderboardHandlers } from "./handlers/leaderboard";

export function registerSockets(fastify: FastifyInstance) {
  fastify.io.use(authMiddleware);

  fastify.io.on("connection", (socket) => {
    handleConnection(socket);
    // registerGameHandlers(fastify.io, socket);
    // registerLeaderboardHandlers(fastify.io, socket);
  });
}
