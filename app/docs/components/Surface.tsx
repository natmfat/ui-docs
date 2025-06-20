import { SurfaceProps, Surface as SurfaceRoot, View } from "natmfat";
import { cn } from "natmfat/lib/cn";

export const Surface = ({ className, ...props }: SurfaceProps) => {
  return (
    <View className="pt-2">
      <SurfaceRoot
        className={cn("rounded-default p-4", className)}
        elevated
        {...props}
      />
    </View>
  );
};
