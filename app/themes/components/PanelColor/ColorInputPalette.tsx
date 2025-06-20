"use client";

import { Heading } from "natmfat/components/Heading";
import { Surface } from "natmfat/components/Surface";
import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";

import { useScrollData } from "../../hooks/useScrollData";
import { colorRecord } from "../../lib/tokenRecord";
import { ColorInput } from "./ColorInput";

export function ColorInputPalette() {
  const { scroll, onScroll } = useScrollData();

  return (
    <View className="w-full flex-1">
      <View
        className={cn(
          "from-background-root duration-chill border-background-root pointer-events-none absolute top-0 right-0 left-0 z-10 h-8 border-t bg-gradient-to-b to-transparent opacity-100 transition-opacity",
          scroll.atTop && "opacity-0",
        )}
      />

      <View
        className="relative grid grid-cols-4 gap-2 overflow-y-auto"
        onScroll={onScroll}
        style={{ height: "273.6px" }}
      >
        {Object.entries(colorRecord).map(([baseColor, colorVariants]) => (
          <Surface
            key={baseColor}
            className="rounded-default items-center gap-2 p-2"
            elevated
          >
            <Heading level={2} size="subheadDefault">
              {baseColor}
            </Heading>
            <View className="gap-2">
              {colorVariants.map((props) => (
                <ColorInput
                  key={props.tokenName}
                  baseColor={baseColor}
                  {...props}
                />
              ))}
            </View>
          </Surface>
        ))}
      </View>

      <View
        className={cn(
          "from-background-root duration-chill border-background-root pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-8 border-b bg-gradient-to-t to-transparent opacity-100 transition-opacity",
          scroll.atBottom && "opacity-0",
        )}
      />
    </View>
  );
}
