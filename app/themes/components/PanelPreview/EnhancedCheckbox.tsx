"use client";

import { Checkbox } from "natmfat/components/Checkbox";
import { Text } from "natmfat/components/Text";
import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";
import { ReactNode, useState } from "react";

export function EnhancedCheckbox({
  children,
  defaultChecked = false,
}: {
  children: ReactNode;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <View className="flex-row items-center gap-2">
      <Checkbox
        checked={checked}
        onCheckedChange={(nextChecked) =>
          setChecked(nextChecked === "indeterminate" ? true : nextChecked)
        }
      />
      <Text color="dimmest" className={cn(checked && "line-through")}>
        {children}
      </Text>
    </View>
  );
}
