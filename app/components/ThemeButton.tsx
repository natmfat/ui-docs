"use client";

import { IconButton } from "natmfat/components/IconButton";
import { useThemeContext } from "natmfat/components/ThemeProvider";
import { View } from "natmfat/components/View";
import { RiMoonIcon } from "natmfat/icons/RiMoonIcon";
import { RiSunIcon } from "natmfat/icons/RiSunIcon";
import { useEffect } from "react";

export function ThemeButton() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <View asChild>
      <IconButton
        alt="Toggle theme"
        className="h-8 w-8 group"
        onClick={() => setTheme(oppositeTheme(theme))}
      >
        {isLightTheme(theme) ? (
          <RiMoonIcon />
        ) : (
          <RiSunIcon className="rotate-0 group-hover:rotate-180 transition-transform duration-chill" />
        )}
      </IconButton>
    </View>
  );
}

const isLightTheme = (theme: string) => theme === "light";
const oppositeTheme = (theme: string) =>
  isLightTheme(theme) ? "dark" : "light";
