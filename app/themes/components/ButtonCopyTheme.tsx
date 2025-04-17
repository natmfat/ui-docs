"use client";

import { Button } from "natmfat/components/Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "natmfat/components/Dialog";
import { Surface } from "natmfat/components/Surface";
import { RiClipboardIcon } from "natmfat/icons/RiClipboardIcon";
import { useMemo } from "react";

import { ColorVars, useColorStore } from "../hooks/useColorStore";
import { CopyIconButton } from "./CopyButton";

export function ButtonCopyTheme() {
  const colorVars = useColorStore((state) => state.colorVars);
  const textColorVars = useMemo(() => createTheme(colorVars), [colorVars]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button color="transparent">
          <RiClipboardIcon />
          Copy Theme
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Copy Theme</DialogTitle>
        <Surface
          elevated
          className="rounded-default border border-[var(--interactive-border)] mt-2 relative"
        >
          <CopyIconButton text={textColorVars} />
          <pre className="max-h-52 overflow-y-auto p-2 ">
            <code>{textColorVars}</code>
          </pre>
        </Surface>
      </DialogContent>
    </Dialog>
  );
}

function createTheme(colorVars: ColorVars) {
  return `[data-theme="custom"] {\n${Object.entries(colorVars)
    // eslint-disable-next-line
    .filter(([_, value]) => value && value.length)
    .map(([colorVar, value]) => `  ${colorVar}: ${value};`)
    .join("\n")} \n}`;
}
