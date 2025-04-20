import { Surface, View } from "natmfat";
import { cn } from "natmfat/lib/cn";
import { ReactNode } from "react";

export const Preview = ({
  children,
  className,
  transparent,
}: {
  children: ReactNode;
  className?: string;
  transparent?: boolean;
}) => {
  return (
    <View className={className}>
      <View className="aspect-video w-full border border-outline-dimmest rounded-default p-6 grid place-items-center bg-grid">
        <Surface
          background="root"
          className={cn(
            "rounded-default shadow-2",
            transparent && "shadow-none bg-transparent"
          )}
        >
          {children}
        </Surface>
      </View>
    </View>
  );
};
