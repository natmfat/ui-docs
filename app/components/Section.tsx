import { View, ViewProps } from "natmfat";
import { cn } from "natmfat/lib/cn";

export const Section = ({ children, className, ...props }: ViewProps) => {
  return (
    <View className="border-t border-interactive border-dashed w-full grow-0">
      <View className={cn("max-w-7xl w-full mx-auto p-6 border-x border-interactive border-dashed", className)} {...props}>
        {children}
      </View>
    </View>
  );
};
