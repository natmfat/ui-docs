import { View, ViewProps } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";

export function Subpanel({ className, ...props }: ViewProps) {
  return (
    <View className={cn("gap-2 justify-around h-full", className)} {...props} />
  );
}
