import { Surface, View } from "natmfat";
import { ReactNode } from "react";

export const Preview = ({ children }: { children: ReactNode }) => {
  return (
    <View className="py-4">
      <View className="aspect-video w-full border border-outline-dimmest rounded-default p-6 grid place-items-center bg-grid">
        <Surface background="root" className="rounded-default shadow-3">
          {children}
        </Surface>
      </View>
    </View>
  );
};
