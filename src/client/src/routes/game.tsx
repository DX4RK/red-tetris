import { useLocation } from "react-router-dom";
import { useState } from "react";

interface GameState {
  playerName?: string;
}

export function Game() {
	const location = useLocation();
	const { playerName } = (location.state as GameState) ?? {};


	const COLS = 10;
	const ROWS = 20;

  // Grille : 0 = vide, sinon une couleur
	const [grid] = useState(() =>
		Array.from({ length: ROWS }, () => Array(COLS).fill(0))
	);

	const colors: Record<number, string> = {
	0: "bg-gray-800",
	1: "bg-cyan-400",   // I
	2: "bg-yellow-400", // O
	3: "bg-purple-500", // T
	4: "bg-green-500",  // S
	5: "bg-red-500",    // Z
	6: "bg-blue-500",   // J
	7: "bg-orange-500", // L
};

  return (
	<div className="flex justify-center items-center h-full flex-col gap-5 bg-gray-300/70 bg-[repeating-linear-gradient(0deg,transparent_0_63px,rgba(207,202,186,0.2)_63px_64px),repeating-linear-gradient(90deg,transparent_0_63px,rgba(202,199,187,0.2)_63px_64px)]">

	<div className="flex  w-[400px] h-full inline-grid grid-cols-10 gap-px bg-gray-900/30 p-2">
		{grid.flat().map((cell, i) => (
		<div
			key={i}
			className={`w-8 h-8 ${colors[cell]}`}
		/>
		))}
	</div>




			<div className="border-t-2 border-black flex justify-between items-center px-8 py-3.5 text-xs tracking-wide">
				<span>RED TETRIS © 2026</span>
				<span className="opacity-75">V0.9.4</span>
    		</div>
	</div>
  );
}
