"use client";

import { IconButton } from "natmfat/components/IconButton";
import { useThemeContext } from "natmfat/components/ThemeProvider";
import { View } from "natmfat/components/View";
import { RiMoonIcon } from "natmfat/icons/RiMoonIcon";
import { RiSunIcon } from "natmfat/icons/RiSunIcon";
import { useEffect } from "react";
import { setTheme as setThemeAction } from "./theme";

export function ThemeButton() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <View asChild>
      <IconButton
        alt="Toggle theme"
        className="group h-8 w-8"
        onClick={() => {
          const nextTheme = oppositeTheme(theme);
          setTheme(nextTheme);
          setThemeAction(nextTheme);
        }}
      >
        {isLightTheme(theme) ? (
          <RiMoonIcon />
        ) : (
          <RiSunIcon className="duration-chill rotate-0 transition-transform group-hover:rotate-180" />
        )}
      </IconButton>
    </View>
  );
}

const isLightTheme = (theme: string) => theme === "light";
const oppositeTheme = (theme: string) =>
  isLightTheme(theme) ? "dark" : "light";
