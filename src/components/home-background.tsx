import { LightRays } from "@/components/ui/light-rays"
import { GridPattern } from "@/components/ui/grid-background"

export default function HomeBackground() {
  return (
    <>
        <GridPattern width={80} height={80} className="opacity-20" />
        <LightRays />
    </>
  );
}
