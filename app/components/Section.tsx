import { View, ViewProps } from "natmfat";
import { cn } from "natmfat/lib/cn";

export const Section = ({ children, className, grow, ...props }: ViewProps & {
grow?: boolean

}) => {
  return (
    <View className={cn("border-t border-interactive border-dashed w-full", grow && "flex-1 h-full")}>
      <View className={cn("max-w-7xl w-full mx-auto p-6 border-x border-interactive border-dashed", className)} {...props}>
        {children}
      </View>
    </View>
  );
};
