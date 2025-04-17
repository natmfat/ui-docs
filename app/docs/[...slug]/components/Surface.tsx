import {Surface as SurfaceRoot, SurfaceProps} from "natmfat"
import { cn } from "natmfat/lib/cn";

export const Surface = ({className, ...props }: SurfaceProps) => {
  return (
    <SurfaceRoot className={cn(className, "rounded-default p-4 mt-2")} elevated {...props} />
  )
}