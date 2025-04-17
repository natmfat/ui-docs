import {
  View,
  Surface,
  RiCheckIcon,
  RiCheckboxCircleIcon,
  RiCloseCircleIcon,
  Text,
} from "natmfat";
import { cn } from "natmfat/lib/cn";
import { tokens } from "natmfat/lib/tokens";
import { ReactNode } from "react";

export function ExampleRoot({ children }: { children: ReactNode }) {
  return <View className="grid grid-cols-2 gap-4 py-4">{children}</View>;
}

export function ExampleItem({
  className,
  children,
  good,
  description,
}: {
  className?: string;
  children: ReactNode;
  good?: boolean;
  description?: boolean;
}) {
  return (
    <View className="gap-2">
      <Surface
        className={cn(
          className,
          "aspect-square grid place-items-center relative text-header-default [&_*]:text-header-default p-8 rounded-default"
        )}
        elevated
      >
        <View className="absolute top-4 left-4">
          {good ? (
            <RiCheckboxCircleIcon
              className="text-positive-default"
              size={tokens.space24}
            />
          ) : (
            <RiCloseCircleIcon
              className="text-negative-default"
              size={tokens.space24}
            />
          )}
        </View>
        {children}
      </Surface>
      {description ? <Text color="dimmer" maxLines={2}>{description}</Text> : null}
    </View>
  );
}
