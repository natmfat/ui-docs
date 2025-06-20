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
      <li className="group w-full flex-row gap-4">
        <View className="items-center">
          <Surface
            className="grid h-7 w-7 grow-0 place-items-center rounded-full font-mono"
            elevated
          >
            {value}
          </Surface>
          <Separator orientation="vertical" className="h-full flex-1" />
        </View>
        <View className="w-full flex-1 gap-2 pb-4 group-last:pb-0">
          <Heading level={1} size="subheadBig">
            {title}
          </Heading>
          {children}
        </View>
      </li>
    </View>
  );
}
