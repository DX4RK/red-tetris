import { useLocation } from "react-router-dom";


import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface GameState {
  playerName?: string;
}

export function Rooms() {
  const location = useLocation();
  const { playerName } = (location.state as GameState) ?? {};

  return (
	<div className="h-full flex flex-col justify-center items-center gap-10">

    	<div className="justify-center items-center">
    	  <h1>Bienvenue{playerName ? `, ${playerName}` : ""} !</h1>
    	</div>
		<Card className="justify-center p-4 w-64">
			<CardHeader>
				<CardTitle className="">Room</CardTitle>
				<CardDescription>Enter the room information</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
				<input></input>
			</CardContent>
			<CardFooter>
			</CardFooter>
		</Card>
	</div>
  );
}