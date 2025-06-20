import {
  Background,
  Surface,
  SurfaceProps,
  Text,
  ThemeProvider,
  View,
} from "natmfat";
import { cn } from "natmfat/lib/cn";
import { ReactNode } from "react";

export const PaddedSurfaceDemo = () => {
  return (
    <View className="grid grid-cols-2 gap-3 pt-4">
      <ThemeProvider value="light" className="bg-transparent">
        <PaddedSurfaceItem label="root">
          <PaddedSurfaceItem label="default" elevated>
            <PaddedSurfaceItem label="higher" elevated>
              <PaddedSurfaceItem label="highest" elevated />
            </PaddedSurfaceItem>
          </PaddedSurfaceItem>
        </PaddedSurfaceItem>
      </ThemeProvider>

      <ThemeProvider value="dark" className="bg-transparent">
        <PaddedSurfaceItem label="root">
          <PaddedSurfaceItem label="default" elevated>
            <PaddedSurfaceItem label="higher" elevated>
              <PaddedSurfaceItem label="highest" elevated />
            </PaddedSurfaceItem>
          </PaddedSurfaceItem>
        </PaddedSurfaceItem>
      </ThemeProvider>
    </View>
  );
};

export const PaddedSurfaceItem = ({
  label,
  children,
  ...props
}: SurfaceProps & { label: Background; children?: ReactNode }) => (
  <Surface
    className={cn(
      "rounded-default aspect-video gap-2 p-4",
      label === "root" && "border-outline-dimmest border",
    )}
    background={label}
    {...props}
  >
    <Text size="small" color="dimmer">
      {label}
    </Text>
    {children}
  </Surface>
);
