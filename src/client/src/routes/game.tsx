import { useLocation } from "react-router-dom";

interface GameState {
  playerName?: string;
}

export function Game() {
  const location = useLocation();
  const { playerName } = (location.state as GameState) ?? {};

  return (
    <div>
      <h1>Bienvenue{playerName ? `, ${playerName}` : ""} !</h1>
    </div>
  );
}