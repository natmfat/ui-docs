import { View, ViewProps } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";

export function Subpanel({ className, ...props }: ViewProps) {
  return (
    <View className={cn("h-full justify-around gap-2", className)} {...props} />
  );
}
