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
        "overflow-hidden rounded-default select-none cursor-pointer w-8 h-8 aspect-square",
        className
      )}
      style={{ backgroundColor: "#710b2c" }}
    >
      <canvas
        className="w-8 h-8 aspect-square disable-blur"
        ref={canvasRef}
        onClick={() => canvas.current?.reset()}
      ></canvas>
    </div>
  );
};
