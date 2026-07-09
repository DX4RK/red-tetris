import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label"
import { Ripple } from "@/components/ui/ripple"
import { Input } from "@/components/ui/input"
import { SparklesText } from "@/components/ui/sparkles-text"
import { TextAnimate } from "@/components/ui/text-animate"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { Popup } from "@/components/elements/popup"
import { GameButton } from "@/components/elements/game-button"
import HomeBackground from "@/components/home-background"


export function Home() {
	const [open, setOpen] = useState(false);
	const [name, setName] = useState<string | null>(null);
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const handlePlay = () => {
		if (!name) {
			setInput("");
			setOpen(true);
		} else {
			navigate("/rooms", { state: { playerName: name } });
		}
	};

	const confirm = () => {
		if (input.trim()) {
			setName(input.trim());
			setOpen(false);
			navigate("/rooms", { state: { playerName: input.trim() } });
		}
	};

	const cancel = () => {
		setOpen(false);
	};

  return (
	<div className="flex h-full flex-col gap-5 bg-gray-300/70 bg-[repeating-linear-gradient(0deg,transparent_0_63px,rgba(207,202,186,0.2)_63px_64px),repeating-linear-gradient(90deg,transparent_0_63px,rgba(202,199,187,0.2)_63px_64px)]">
	{/* <div className="h-full flex flex-col justify-center items-center gap-10"> */}
		<div className="relative z-1 w-full flex flex-col justify-start gap-4 px-6">
			 <div className="px-8 ">
				<div className="flex justify-between items-start">
					<h1 className="flex text-left font-extrabold text-sm/60 text-[300px] text-red-700/80">RED</h1>
					<div className="text-right w-full mt-6">
						<div className="text-base font-extrabold text-black tracking-[3px]">BROWSER TETRIS //</div>
						<div className="text-sm font-medium tracking-wide opacity-70 mt-2 leading-relaxed">NO INSTALL. NO MERCY.</div>
					</div>
				</div>
				<h1 className="flex text-left font-extrabold text-sm/60 text-[300px] text-red-700/80">TETRIS</h1>
			<div className="absolute inset-0 pointer-events-none opacity-[0.26] mix-blend-multiply bg-repeat bg-[length:280px] bg-[url('data:image/svg+xml,...')]">
			</div>
			</div>
		</div>

		<div className="flex-1 flex flex-col gap-6 px-8 pt-4">
			<TextAnimate animation="slideLeft" by="character" once className="text-4xl text-neutral-800 font-bold max-w-[600px]">
			STACK FAST. CLEAR LINES.</TextAnimate>
			<div className="relative z-2 flex justify-start justify-center gap-4 px-12">
				<Popup
					isOpen={open}
					value={input}
					onChange={setInput}
					onConfirm={confirm}
					onCancel={cancel}
				/>
				<div className="flex w justify-start gap-[22px]">
					<GameButton variant="primary" onClick={handlePlay}>
					Singleplayer
					</GameButton>
					<GameButton variant="secondary" onClick={() => console.log("Multiplayer")}>
					Multiplayer
					</GameButton>
				</div>
			</div>
				<div className="flex text-xs font-semibold tracking-[0.35em] text-slate-800/60 uppercase dark:text-slate-200/60">
				READY_  SEVEN PIECES · ONE WELL · ENDLESS FALL</div>
		</div>

				<button onClick={() => navigate("/Game")}>Game</button>
		<div className="border-t-2 text-neutral-800 border-black flex justify-between items-center px-8 py-3.5 text-xs tracking-wide">
			<span>RED TETRIS © 2026</span>
			<span className="opacity-75">V0.9.4</span>
		</div>
	</div>
  )
}
