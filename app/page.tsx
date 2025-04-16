import {
  Button,
  Heading,
  RiArrowRightIcon,
  RiMagicIcon,
  Text,
  View,
} from "natmfat";

export default function Home() {
  return (
    <View>
      <Heading level={1}>Beautifully designed components</Heading>
      <Text className="mt-1 max-w-lg" multiline>
        A set of beautifully-designed, accessible components. Works with your
        favorite frameworks. Open Source.
      </Text>
      <View className="flex-row gap-2 mt-3">
        <Button color="primary">
          Get Started
          <RiArrowRightIcon />
        </Button>
        <Button>
          Use Magic
          <RiMagicIcon />
        </Button>
      </View>
    </View>
  );
}
