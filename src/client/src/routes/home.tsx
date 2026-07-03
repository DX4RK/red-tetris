import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label"
import { Ripple } from "@/components/ui/ripple"
import { Input } from "@/components/ui/input"
import { SparklesText } from "@/components/ui/sparkles-text"
import { TextAnimate } from "@/components/ui/text-animate"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { PlayerButton } from "@/components/elements/play-button"
import { RoomButton } from "@/components/elements/room-button"
import { Popup } from "@/components/elements/popup"
import { GameButton } from "@/components/elements/game-button"
import HomeBackground from "@/components/home-background"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function NamePopup () {

	const [open, setOpen] = useState(false);
	const [name, setName] = useState<string | null>(null);
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	const handlePlay = () => {
		if (!name) {
			setOpen(true);
		} else {
		}
	};

	const confirm = () => {
		if (input.trim()) {
			setName(input.trim());
			navigate("/rooms", { state: { playerName: name.trim() } });
		}
	};

export function Home() {
  return (
	<div className="h-full flex flex-col justify-center items-center gap-10">

		<div className="relative z-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
			<span className="text-xs font-semibold tracking-[0.35em] text-slate-800/60 uppercase dark:text-slate-200/60">
			  Project
			</span>
			<SparklesText colors={{first: "#ff2424", second: "#fe8b8b"}}>
				<DiaTextReveal
					className="text-1xl font-bold tracking-tight"
					colors={["#ff2424", "#fe8b8b"]}
					duration={1}
					text=" Red Tetris"
				/>
			</SparklesText>
			<TextAnimate animation="slideLeft" by="character" once className="max-w-md text-sm text-slate-800/80 md:text-base dark:text-slate-200/80">
				The classic block-stacking game reimagined for multiplayer.
			</TextAnimate>
		</div>

		<div className="relative z-2 flex items-center justify-center gap-4 px-6">
			<Popup />
			<div className="flex gap-[22px]">
				<GameButton variant="primary" onClick={() => console.log("Singleplayer")}>
				Singleplayer
				</GameButton>
				<GameButton variant="secondary" onClick={() => console.log("Multiplayer")}>
				Multiplayer
				</GameButton>
			</div>
			<PlayerButton />
		   <RoomButton />
		</div>

		<HomeBackground />
		<div className="fixed h-full w-full overflow-hidden">


		</div>
	</div>
  )
}}
