// ModeButtons.tsx
// Extracted from the RED TETRIS design (poster / hero variant).
// Requires Tailwind CSS. Uses arbitrary values for the exact colors/shadows —
// promote these to your tailwind.config theme if you want named tokens.
//
// Font: the design uses "Martian Mono" (Google Font, weight 800 for buttons).
// Load it however your app loads fonts, e.g. in your root layout/head:
//   <link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400;500;700;800&display=swap" rel="stylesheet" />
// then either set it as your `font-mono` in tailwind.config, or swap
// `font-mono` below for `font-['Martian_Mono']`.

import React from "react";

type ModeButtonVariant = "primary" | "secondary";

interface ModeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ModeButtonVariant;
}

const INK = "#17150f";
const RED = "#E5241A";
const PAPER = "#d7d4ce";

export function GameButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: ModeButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      {...props}
      className={[
        // shared shape/type
        "cursor-pointer font-martian font-extrabold uppercase tracking-[2px]",
        "text-[22px] px-[30px] py-5 border-[3px] text-opacity-0",
        "transition-all duration-[120ms] ease-out",
        "active:duration-[80ms]",
        isPrimary
          ? [
              "border-[#17150f] bg-[#E5241A] text-opacity-0",
              "shadow-[7px_7px_0_#17150f]",
              "hover:-translate-x-[3px] hover:-translate-y-[3px]",
              "hover:bg-[#17150f]  hover:shadow-[13px_13px_0_#17150f]",
              "active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0_0_0_#17150f]",
			  "text-opacity-0"
            ].join(" ")
          : [
              "border-[#17150f] bg-[#17150f] text-[#d7d4ce]",
              "shadow-[7px_7px_0_#E5241A]",
              "hover:-translate-x-[3px] hover:-translate-y-[3px]",
              "hover:bg-[#E5241A]  hover:shadow-[13px_13px_0_#E5241A]",
              "active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0_0_0_#E5241A]",			  
			  "text-opacity-0"
            ].join(" "),
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}