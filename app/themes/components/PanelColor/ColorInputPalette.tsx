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
          "absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background-root to-transparent z-10 opacity-100 duration-chill transition-opacity pointer-events-none border-t border-background-root",
          scroll.atTop && "opacity-0",
        )}
      />

      <View
        className="gap-2 grid grid-cols-4 overflow-y-auto relative"
        onScroll={onScroll}
        style={{ height: "273.6px" }}
      >
        {Object.entries(colorRecord).map(([baseColor, colorVariants]) => (
          <Surface
            key={baseColor}
            className="gap-2 p-2 rounded-default items-center"
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
          "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background-root to-transparent z-10 opacity-100 duration-chill transition-opacity pointer-events-none border-b border-background-root",
          scroll.atBottom && "opacity-0",
        )}
      />
    </View>
  );
}
