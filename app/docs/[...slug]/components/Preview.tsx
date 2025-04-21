import { Surface, View } from "natmfat";
import { cn } from "natmfat/lib/cn";
import { ReactNode } from "react";

export const Preview = ({
  children,
  className,
  transparent,
  expand,
}: {
  children: ReactNode;
  className?: string;
  /**
   * Make surface transparent, use if you want to the element to stand on its own without a bg
   */
  transparent?: boolean;
  /**
   * Make the surface full width
   */
  expand?: boolean;
}) => {
  return (
    <View className={className}>
      <View className="aspect-video w-full border border-outline-dimmest rounded-default p-8 grid place-items-center bg-grid">
        <Surface
          background="root"
          className={cn(
            "rounded-default shadow-1",
            transparent && "shadow-none bg-transparent",
            expand && "w-full"
          )}
        >
          {children}
        </Surface>
      </View>
    </View>
  );
};
