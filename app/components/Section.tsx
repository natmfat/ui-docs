import { View, ViewProps } from "natmfat";
import { cn } from "natmfat/lib/cn";

export const Section = ({
  children,
  className,
  top,
  grow,
  ...props
}: ViewProps & {
  grow?: boolean;
  top?: boolean;
}) => {
  return (
    <View
      className={cn(
        "border-outline-dimmest w-full border-dashed",
        grow && "h-full flex-1",
        !top && "border-t",
      )}
    >
      <View
        className={cn(
          "xl:border-outline-dimmest mx-auto h-full w-full max-w-7xl flex-1 border-dashed border-transparent p-6 xl:border-x",
          className,
        )}
        {...props}
      >
        {children}
      </View>
    </View>
  );
};
