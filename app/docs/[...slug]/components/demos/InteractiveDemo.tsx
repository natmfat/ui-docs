import { Heading, Interactive, Surface, Text, View } from "natmfat";

const BACKGROUNDS = ["root", "default", "higher", "highest"] as const;
const INTERACTIVE_VARIANTS = [
  "fill",
  "noFill",
  "outline",
  "fillOutline",
  "listItem",
] as const;

export const InteractiveDemo = () => {
  return (
    <View className="grid grid-cols-4 gap-3 pt-4">
      {BACKGROUNDS.map((background) => (
        <Surface
          className="border border-outline-dimmest p-2 rounded-default gap-2"
          key={background}
          background={background}
        >
          <Text color="dimmer" size="small">
            {background}
          </Text>

          {INTERACTIVE_VARIANTS.map((variant) => (
            <Interactive variant={variant} key={variant}>
              <View className="p-2" asChild>
                <button>{variant}</button>
              </View>
            </Interactive>
          ))}
        </Surface>
      ))}
    </View>
  );
};
