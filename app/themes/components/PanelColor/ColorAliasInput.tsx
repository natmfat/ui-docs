"use client";

import { Color, Colorway } from "natmfat/components/Colorway";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "natmfat/components/Select";
import { Text } from "natmfat/components/Text";
import { View } from "natmfat/components/View";
import { styleToToken } from "natmfat/lib/tokens";

import { useColorStore } from "../../hooks/useColorStore";
import { colorRecord } from "../../lib/tokenRecord";

export function ColorAliasInput({
  defaultValue,
  colorAlias,
}: {
  defaultValue?: string;
  colorAlias: string;
}) {
  const insertColorVars = useColorStore((state) => state.insertColorVars);
  // @todo aliases for primary should be reflected in select

  return (
    <label className="flex flex-col gap-1">
      <Text>{colorAlias}</Text>
      <Select
        defaultValue={defaultValue}
        onValueChange={(value) => {
          insertColorVars(createColorVariants(colorAlias, value));
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a primary color" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(colorRecord).map((color) => (
            <ColorSelectItem color={color} key={color} />
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}

function ColorSelectItem({ color }: { color: string }) {
  const colorVariant = createColorVariant(color, "dimmest");
  const colorStyle = useColorStore((state) => state.colorVars[colorVariant]);

  return (
    <SelectItem value={color}>
      <Colorway color={color as Color} variant="outlineStatic">
        <View
          className="h-5 w-5 rounded-lg"
          style={{
            backgroundColor: colorStyle || styleToToken(colorVariant),
          }}
        />
      </Colorway>
      {color}
    </SelectItem>
  );
}

const colorVariants = [
  "dimmest",
  "dimmer",
  "default",
  "stronger",
  "strongest",
] as const;

function createColorVariant(
  color: string,
  variant: (typeof colorVariants)[number] = "default",
) {
  return `--${color}-${variant}`;
}

function createColorVariants(colorAlias: string, color: string) {
  return colorVariants.reduce(
    (acc, variant) => ({
      ...acc,
      [`--${colorAlias}-${variant}`]: styleToToken(`--${color}-${variant}`),
    }),
    {},
  );
}
