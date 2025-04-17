"use client";

import { Button } from "natmfat/components/Button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "natmfat/components/Dialog";
import { MultilineInput } from "natmfat/components/MultilineInput";
import { RiSparklingIcon } from "natmfat/icons/RiSparklingIcon";
import { useState } from "react";

import { ColorVars, useColorStore } from "../hooks/useColorStore";

export function ButtonImportTheme() {
  const [value, setValue] = useState("");
  const insertColorVars = useColorStore((state) => state.insertColorVars);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <RiSparklingIcon />
          Import Theme
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Import Theme</DialogTitle>
        <MultilineInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`[data-theme="custom"] {\n\n}`}
          className="mt-2 font-mono min-h-52"
        />
        <Button
          onClick={() => {
            setValue("");
            insertColorVars(cssToColorVars(value));
          }}
          className="self-end mt-2"
        >
          <RiSparklingIcon />
          Import Theme
        </Button>
      </DialogContent>
    </Dialog>
  );
}

function cssToColorVars(css: string): ColorVars {
  // parse lines & remove delimiters, if necessary
  const lines = splitParse(css, "\n");
  if (lines[0]?.includes("{")) {
    lines.shift();
  }
  if (lines[lines.length - 1]?.includes("}")) {
    lines.pop();
  }

  return lines.reduce((acc, line) => {
    const [cssVar, valueSemi] = splitParse(line, ":");
    // ensure css var is indeed a css var
    if (!cssVar.startsWith("--")) {
      return acc;
    }
    const value = valueSemi.endsWith(";")
      ? valueSemi.substring(0, valueSemi.length - 1)
      : valueSemi;
    return {
      ...acc,
      [cssVar]: value,
    };
  }, {});
}

function splitParse(text: string, delimiter: string): string[] {
  return text
    .trim()
    .split(delimiter)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}
