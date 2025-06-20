import {
  RiCheckboxCircleIcon,
  RiCloseCircleIcon,
  Surface,
  Text,
  View,
} from "natmfat";
import { cn } from "natmfat/lib/cn";
import { tokens } from "natmfat/lib/tokens";
import { ReactNode } from "react";

export function ExampleRoot({ children }: { children: ReactNode }) {
  return <View className="grid grid-cols-2 gap-4 pt-4">{children}</View>;
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
          "text-header-default [&_*]:text-header-default rounded-default relative grid aspect-video place-items-center p-8",
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
      {description ? (
        <Text color="dimmer" maxLines={2}>
          {description}
        </Text>
      ) : null}
    </View>
  );
}
