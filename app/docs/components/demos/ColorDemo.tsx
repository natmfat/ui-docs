import { Text, View } from "natmfat";
import { cn } from "natmfat/lib/cn";

const ColorTile = ({ className }: { className?: string }) => (
  <View className={cn("aspect-square w-18 shrink-0 grow-0", className)}></View>
);

export const ColorDemo = () => {
  return (
    <View className="gap-4 pt-4">
      <View className="flex-row">
        <ColorTile className="bg-primary-strongest" />
        <ColorTile className="bg-primary-stronger" />
        <ColorTile className="bg-primary-default" />
        <ColorTile className="bg-primary-dimmer" />
        <ColorTile className="bg-primary-dimmest" />
      </View>

      <View className="gap-2">
        <View className="flex-row">
          <ColorTile className="bg-red-default" />
          <ColorTile className="bg-orange-default" />
          <ColorTile className="bg-yellow-default" />
          <ColorTile className="bg-green-default" />
        </View>
        <Text color="dimmer" size="small">
          Alert Colors
        </Text>
      </View>

      <View className="gap-2">
        <View className="flex-row">
          <ColorTile className="bg-foreground-default" />
          <ColorTile className="bg-foreground-dimmer" />
          <ColorTile className="bg-foreground-dimmest" />
        </View>
        <Text color="dimmer" size="small">
          Foreground Colors
        </Text>
      </View>
    </View>
  );
};
