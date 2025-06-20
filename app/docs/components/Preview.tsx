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
   * Make surface transparent, use if you want to the element to stand on its own without a shadow
   */
  transparent?: boolean;
  /**
   * Make the surface full width
   */
  expand?: boolean;
}) => {
  return (
    <View className={className}>
      <View className="border-outline-dimmest rounded-default bg-grid grid aspect-video w-full place-items-center border p-8">
        <Surface
          background="root"
          className={cn(
            "rounded-default shadow-1",
            transparent && "bg-transparent shadow-none",
            expand && "w-full",
          )}
        >
          {children}
        </Surface>
      </View>
    </View>
  );
};
