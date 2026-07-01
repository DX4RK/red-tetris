import type { Socket } from "socket.io";

export function authMiddleware(socket: Socket, next: (err?: Error) => void) {
  const { playerId, name } = socket.handshake.auth;

  if (!playerId) return next(new Error("missing playerId"));

  socket.data.playerId = playerId;
  socket.data.name = name;
  next();
}
