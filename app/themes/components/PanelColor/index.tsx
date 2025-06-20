import { Surface } from "natmfat/components/Surface";
import { View } from "natmfat/components/View";

import { ColorAliasInput } from "./ColorAliasInput";
import { ColorInputPalette } from "./ColorInputPalette";

export function PanelColor() {
  return (
    <View className="w-full">
      <View className="flex-row gap-2">
        <View className="w-fit min-w-52 flex-shrink-0">
          <Surface elevated className="rounded-default gap-2 p-2">
            <ColorAliasInput defaultValue="blue" colorAlias="primary" />
            <ColorAliasInput defaultValue="green" colorAlias="positive" />
            <ColorAliasInput defaultValue="red" colorAlias="negative" />
            <ColorAliasInput defaultValue="yellow" colorAlias="warning" />
          </Surface>
        </View>

        <ColorInputPalette />
      </View>
    </View>
  );
}
