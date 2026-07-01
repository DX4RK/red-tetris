import type { Socket } from "socket.io";
// import { upsertPlayer } from "../../db/players";

export async function handleConnection(socket: Socket) {
  const { playerId, name } = socket.data;

//   const player = await upsertPlayer(playerId, name);
//   socket.emit("player-info", { name: player.name, score: player.score });

//   console.info("Socket connected!", socket.id, "as", player.name);
  console.info("Socket connected!", socket.id, "as", "not yet");

  socket.on("disconnect", () => {
    console.info("Socket disconnected", socket.id);
  });
}
