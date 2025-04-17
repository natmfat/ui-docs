"use client";

import { Button } from "natmfat/components/Button";
import { IconButton } from "natmfat/components/IconButton";
import { Popover, PopoverContent, PopoverTrigger } from "natmfat/components/Popover";
import { Text } from "natmfat/components/Text";
import { useThemeContext } from "natmfat/components/ThemeProvider";
import { RiMoonIcon } from "natmfat/icons/RiMoonIcon";
import { RiSunIcon } from "natmfat/icons/RiSunIcon";
import { tokens } from "natmfat/lib/tokens";
import { useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open}>
      <PopoverTrigger asChild>
        <IconButton
          alt="Toggle Theme"
          className="h-8 w-8"
          variant="fill"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          {theme === "light " ? <RiMoonIcon /> : <RiSunIcon />}
        </IconButton>
      </PopoverTrigger>
      <PopoverContent className="w-60 max-w-full gap-1">
        <Text multiline>
          Are you sure? Switching the theme will reset the current color
          palette.
        </Text>

        <Button
          size={tokens.space12}
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
            setOpen(false);
          }}
        >
          Toggle Theme
        </Button>
      </PopoverContent>
    </Popover>
  );
}
