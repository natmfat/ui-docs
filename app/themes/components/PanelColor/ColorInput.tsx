"use client";

import { Color, Colorway } from "natmfat/components/Colorway";
import { Interactive } from "natmfat/components/Interactive";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "natmfat/components/Popover";
import { Text } from "natmfat/components/Text";
import { useThemeContext } from "natmfat/components/ThemeProvider";
import { View } from "natmfat/components/View";
import { tokenToRaw, tokenToStyle } from "natmfat/lib/tokens";
import { useCallback, useEffect, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import { useColorStore } from "../../hooks/useColorStore";
import { ColorToken } from "../../lib/tokenRecord";

export function ColorInput({
  displayName,
  tokenValue,
  baseColor,
}: ColorToken & { baseColor: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localValue, setLocalValue] = useState<string | undefined>(undefined);
  const updateColorVar = useColorStore((state) => state.updateColorVar);
  const colorVars = useColorStore((state) => state.colorVars);
  const cleared = useColorStore((state) => state.__cleared);
  const { theme } = useThemeContext();

  const tokenStyle = tokenToStyle(tokenValue);
  const value = colorVars[tokenStyle] || localValue; // use global value if available

  // set global and local value
  const setValue = useCallback(
    (nextValue: string) => {
      updateColorVar(tokenStyle, nextValue);
      setLocalValue(nextValue);
    },
    [tokenStyle, updateColorVar],
  );

  // reset local value if theme changes or is reset
  useEffect(() => {
    setValue(
      tokenToRaw(
        tokenValue,
        document.body.querySelector("[data-theme]")! as HTMLElement,
      ),
    );
  }, [theme, cleared, tokenValue, setValue]);

  return (
    <View className="gap-1 text-center">
      <View className="relative">
        <Interactive>
          <HexColorInput
            prefixed
            color={value}
            onChange={setValue}
            className="placeholder:text-foreground-dimmest text-foreground-default w-full px-2 py-1 pl-7 focus:outline-none"
          />
        </Interactive>

        <Text
          size="small"
          color="dimmest"
          className="pointer-events-none absolute top-1/2 right-1.5 -translate-y-1/2 select-none"
        >
          {displayName}
        </Text>

        <Popover>
          <PopoverTrigger asChild>
            <Colorway color={baseColor as Color} variant="outlineStatic">
              <View
                className="absolute top-1/2 left-1.5 h-5 w-5 -translate-y-1/2 cursor-pointer rounded-lg"
                style={{
                  backgroundColor: value,
                }}
                onClick={() => {
                  inputRef.current?.click();
                }}
              />
            </Colorway>
          </PopoverTrigger>
          <PopoverContent className="gap-2">
            <HexColorPicker color={value} onChange={setValue} />
          </PopoverContent>
        </Popover>
      </View>
    </View>
  );
}
