import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface Room {
  id: string;
  name: string;
  players: number;
  maxPlayers: number;
}

interface GameState {
  playerName?: string;
}
//fake API a remplacer 
const ROOMS: Room[] = [
  { id: "1", name: "Hugo", players: 1, maxPlayers: 4 },
  { id: "2", name: "Test", players: 3, maxPlayers: 4 },
];

export function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { playerName } = (location.state as GameState) ?? {};

useEffect(() => {
const fetchRooms = async () => {
	try {
	await new Promise((resolve) => setTimeout(resolve, 300));
	setRooms(ROOMS);
	} catch (err) {
	setError(err instanceof Error ? err.message : "Erreur inconnue");
	} finally {
	setLoading(false);
	}
};
fetchRooms();
}, []);

  const joinRoom = (roomId: string) => {
    navigate("/game", { state: { playerName, roomId } });
  };

  if (loading) return <p>Chargement des rooms...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
	<div className="flex h-full items-center justify-center flex-col gap-5 bg-gray-300/70 bg-[repeating-linear-gradient(0deg,transparent_0_63px,rgba(207,202,186,0.2)_63px_64px),repeating-linear-gradient(90deg,transparent_0_63px,rgba(202,199,187,0.2)_63px_64px)]">

		<div className="bg-gray-800 p-5 rounded-lg text-gray-200 ">
			<div className="justify-center items-center text-3xl text-red">
				<h1>Bienvenue{playerName ? `, ${playerName}` : ""} !</h1>
			</div>
			<div className="justify-center p-4 w-64">
				<div>
					<div>Enter the room information</div>
				</div>
				<div>
					<input className="outline-2"
						placeholder="room name"></input>
				</div>
			</div>
		</div>

		<div className="bg-gray-800 p-5 rounded-lg">
			<h2>Parties disponibles</h2>
				{rooms.length === 0 ? (
					<p>Aucune partie en cours. Crée la première !</p>
				) : (
					<ul>
					{rooms.map((room) => (
						<li className="bg-gray-400 mx-6 my-2 p-2" key={room.id}>
						{room.name} — {room.players}/{room.maxPlayers}
						<button className="bg-red-500 outline-2 outline-neutral-800 p-2 m-3 hover:scale-110" onClick={() => joinRoom(room.id)}>Rejoindre</button>
						</li>
					))}
					</ul>
				)}
		</div>
	</div>
  );
}
