import { useLocation } from "react-router-dom";

interface GameState {
  playerName?: string;
}

export function Game() {
  const location = useLocation();
  const { playerName } = (location.state as GameState) ?? {};

  return (
	<div className="relative overflow-hidden w-full h-full border-2 border-black bg-[#d7d4ce] text-black">
		<div className="relative z-10 flex flex-col h-full">
			 <div className="px-8">
				<div className="flex justify-between items-start">
					<div className="text-[300px] leading-[0.8] font-extrabold tracking-tighter">RED</div>
					<div className="text-right max-w-[390px] mt-6">
						<div className="text-sm font-extrabold tracking-[3px]">BROWSER TETRIS //</div>
						<div className="text-xs font-medium tracking-wide opacity-70 mt-2 leading-relaxed">NO INSTALL. NO MERCY.</div>
					</div>
				</div>
				<div className="text-[300px] leading-[0.78] font-extrabold tracking-tighter">TETRIS</div>
			</div>

			<div className="flex-1 flex gap-9 px-8 pt-6">
				<div className="flex-1 flex flex-col gap-6">
					<div className="text-3xl font-bold max-w-[600px]">STACK FAST. CLEAR LINES.</div>
					<div className="flex gap-5">
						<button className="px-8 py-5 border-[3px] border-black font-extrabold uppercase tracking-wide shadow-[7px_7px_0_black]">Singleplayer</button>
						<button className="px-8 py-5 border-[3px] border-black font-extrabold uppercase tracking-wide shadow-[7px_7px_0_red]">Multiplayer</button>
					</div>
				</div>
				<div className="w-[360px] border-2 border-black self-start bg-black/5"></div>
			</div>

			<div className="border-t-2 border-black flex justify-between items-center px-8 py-3.5 text-xs tracking-wide">
				<span>RED TETRIS © 2026</span>
				<span className="opacity-75">V0.9.4</span>
    		</div>
		</div>
	</div>
  );
}
