"use client";

import { Button } from "natmfat/components/Button";
import { RiRefreshIcon } from "natmfat/icons/RiRefreshIcon";

import { useColorStore } from "../hooks/useColorStore";

export function ButtonResetTheme() {
  const clearColorVars = useColorStore((state) => state.clearColorVars);

  return (
    <Button color="transparent" onClick={() => clearColorVars()}>
      <RiRefreshIcon />
      Reset Theme
    </Button>
  );
}
