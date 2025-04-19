import { View, ViewProps } from "natmfat";
import { cn } from "natmfat/lib/cn";

export const Section = ({ children, className, top, grow, ...props }: ViewProps & {
grow?: boolean;
top?: boolean;
}) => {
  return (
    <View className={cn("border-outline-dimmest border-dashed w-full", grow && "flex-1 h-full", !top && "border-t")}>
      <View className={cn("max-w-7xl w-full mx-auto p-6 border-x border-outline-dimmest border-dashed flex-1 h-full", className)} {...props}>
        {children}
      </View>
    </View>
  );
};
