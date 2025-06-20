"use client";

import { IconButton } from "natmfat/components/IconButton";
import { RiCheckIcon } from "natmfat/icons/RiCheckIcon";
import { RiClipboardIcon } from "natmfat/icons/RiClipboardIcon";
import { cn } from "natmfat/lib/cn";
import { copyToClipboard } from "natmfat/lib/copyToClipboard";
import { useRef, useState } from "react";

export function CopyIconButton({
  text,
  delay = 2000,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const [check, setCheck] = useState(false);
  const ref = useRef<ReturnType<typeof setTimeout>>(null);

  return (
    <IconButton
      alt="Copy to clipboard"
      className={cn("absolute top-2 right-2", className)}
      onClick={() => {
        copyToClipboard(text);
        if (ref.current) {
          clearTimeout(ref.current);
        }
        setCheck(true);
        ref.current = setTimeout(() => setCheck(false), delay);
      }}
    >
      {check ? (
        <RiCheckIcon className="text-positive-default" />
      ) : (
        <RiClipboardIcon />
      )}
    </IconButton>
  );
}
