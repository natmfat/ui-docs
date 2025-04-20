import { Surface, View } from "natmfat";
import { cn } from "natmfat/lib/cn";
import { ReactNode } from "react";

export const Preview = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <View className={className}>
      <View className="aspect-video w-full border border-outline-dimmest rounded-default p-6 grid place-items-center bg-grid">
        <Surface background="root" className="rounded-default shadow-2">
          {children}
        </Surface>
      </View>
    </View>
  );
};
