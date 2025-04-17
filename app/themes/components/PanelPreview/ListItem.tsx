import { Interactive } from "natmfat/components/Interactive";
import { Text } from "natmfat/components/Text";
import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";
import { spaceTokens } from "natmfat/lib/tokens";

export function ListItem({
  icon,
  text,
  insetLevel = 0,
  active,
}: {
  icon: React.ReactNode;
  text: string;
  insetLevel?: number;
  active?: boolean;
}) {
  return (
    <Interactive
      variant="listItem"
      className={cn(active && "bg-primary-dimmest")}
    >
      <View
        className="flex-row items-center gap-1 py-1"
        style={{
          padding: spaceTokens.space8,
          paddingLeft: `calc(${insetLevel ? insetLevel * 3.45 : 1} * ${
            spaceTokens.space8
          })`,
        }}
      >
        {icon}
        <Text>{text}</Text>
      </View>
    </Interactive>
  );
}
