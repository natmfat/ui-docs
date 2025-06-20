"use client";

import { cn } from "natmfat/lib/cn";
import { useEffect, useRef } from "react";

import { Canvas } from "./Canvas";

export const Logo = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvas = useRef<Canvas>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    canvas.current = new Canvas(canvasRef.current);

    return () => {
      canvas.current?.dispose();
    };
  }, []);

  return (
    <div
      className={cn(
        "rounded-default aspect-square h-8 w-8 cursor-pointer overflow-hidden select-none",
        className,
      )}
      style={{ backgroundColor: "#710b2c" }}
    >
      <canvas
        className="disable-blur aspect-square h-8 w-8"
        ref={canvasRef}
        onClick={() => canvas.current?.reset()}
      ></canvas>
    </div>
  );
};
