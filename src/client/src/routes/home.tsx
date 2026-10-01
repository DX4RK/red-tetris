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

		<div className="flex ">

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
				<div className="flex text-s font-semibold tracking-[0.35em] text-slate-800 uppercase dark:text-slate-200/60">
					READY_  SEVEN PIECES · ONE WELL · ENDLESS FALL</div>
			</div>



		<div className="items-center px-8">
			<div className="w-[360px] border-l-2 bg-gray-900/30 text-neutral-800 border-black flex flex-col self-start">

				<div className="bg-red-600 text-[#d7d4ce] px-4 py-3 font-extrabold text-sm tracking-[2px]">
					LEADERBOARD
				</div>

				<div className="grid grid-cols-[54px_1fr_auto] text-[11px] font-extrabold tracking-wide px-4 py-2.5 border-b-2 border-black opacity-60">
					<span>RANK</span><span>NAME</span><span>SCORE</span>
				</div>

				<div className="grid grid-cols-[54px_1fr_auto] text-sm font-semibold px-4 py-3 border-b border-black/[.18]">
					<span className="font-extrabold">01</span><span>NEO_</span><span>998,240</span>
				</div>
				<div className="grid grid-cols-[54px_1fr_auto] text-sm font-semibold px-4 py-3 border-b border-black/[.18]">
					<span className="font-extrabold">02</span><span>BRK</span><span>874,010</span>
				</div>
				<div className="grid grid-cols-[54px_1fr_auto] text-sm font-semibold px-4 py-3 border-b border-black/[.18]">
					<span className="font-extrabold">03</span><span>V0X</span><span>861,770</span>
				</div>
				<div className="grid grid-cols-[54px_1fr_auto] text-sm font-semibold px-4 py-3 border-b border-black/[.18]">
					<span className="font-extrabold">04</span><span>TNT</span><span>799,300</span>
				</div>
				<div className="grid grid-cols-[54px_1fr_auto] text-sm font-semibold px-4 py-3 border-b border-black/[.18]">
					<span className="font-extrabold">05</span><span>JEN</span><span>742,120</span>
				</div>
				<div className="grid grid-cols-[54px_1fr_auto] text-sm font-semibold px-4 py-3 opacity-60">
					<span className="font-extrabold">06</span><span>???</span><span>690,050</span>
				</div>
			</div>
		</div>
		</div>

		<div className="border-t-2 text-neutral-800 border-black flex justify-between items-center px-8 py-3.5 text-xs tracking-wide">
			<span>RED TETRIS © 2026</span>
			<span className="opacity-75">V0.9.4</span>
		</div>
	</div>
  )
}
