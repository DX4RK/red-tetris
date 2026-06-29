import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SparklesText } from "@/components/ui/sparkles-text"
import { TextAnimate } from "@/components/ui/text-animate"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"

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

export function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-10">
        {/* Tex Zone */}

    <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 text-center">
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

    <div className="relative z-10 flex items-center justify-center gap-4 px-6">
       <Button className="p-5">Browse Rooms</Button>
       <Button className="p-5" variant="outline">Second Button</Button>
    </div>

    <HomeBackground />
    {/* <div className="fixed h-full w-full overflow-hidden">

      <Card className="w-64">
            <CardHeader>
                <CardTitle>Room</CardTitle>
                <CardDescription>Enter the room information</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Button type="submit" className="w-full">
                    Connect
                </Button>
            </CardFooter>
        </Card>
    </div> */}
    </div>
  )
}
