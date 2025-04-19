"use client";

import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";
import { ComponentProps } from "react";
import MarqueeRoot from "react-fast-marquee";
import { AppPill } from "./AppPill";
import { apps } from "./apps";

export function AppMarquee({
  className,
  setApp,
  ...props
}: Partial<ComponentProps<typeof MarqueeRoot>> & {
  setApp: (appIdx: number) => void;
}) {
  return (
    <View
      className={cn(
        "relative flex-row justify-center overflow-hidden max-w-full w-full",
        className
      )}
    >
      <MarqueeGradient position="left" />
      <MarqueeRoot speed={20} pauseOnHover autoFill className="w-full" {...props}>
        {apps.map((app, i) => (
          <AppPill key={app.name} {...app} setApp={() => setApp(i)} />
        ))}
      </MarqueeRoot>
      <MarqueeGradient position="right" />
    </View>
  );
}

function MarqueeGradient({ position }: { position: "left" | "right" }) {
  return (
    <View
      className={cn(
        "pointer-events-none absolute top-0 w-20 h-full from-background-root to-transparent z-10",
        position === "left" && "left-0 bg-gradient-to-r",
        position === "right" && "right-0 bg-gradient-to-l"
      )}
    />
  );
}
