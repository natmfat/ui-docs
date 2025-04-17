import { Heading, Separator, Surface, View } from "natmfat";
import { ReactNode } from "react";

export function StepRoot({ children }: { children: ReactNode }) {
  return (
    <View asChild className="py-6">
      <ol>{children}</ol>
    </View>
  );
}

export function StepItem({
  value,
  title,
  children,
}: {
  value: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <View asChild>
      <li className="flex-row gap-4 w-full group">
        <View className="items-center">
          <Surface
            className="h-7 w-7 font-mono grid place-items-center rounded-full grow-0"
            elevated
          >
            {value}
          </Surface>
          <Separator orientation="vertical" className="flex-1 h-full" />
        </View>
        <View className="flex-1 w-full pb-4 group-last:pb-0">
          <Heading level={1} size="subheadBig">
            {title}
          </Heading>
          {children}
        </View>
      </li>
    </View>
  );
}