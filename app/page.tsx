import {
  Button,
  Heading,
  RiArrowRightIcon,
  RiMagicIcon,
  Text,
  View,
} from "natmfat";
import Link from "next/link";

export default function Home() {
  return (
    <View>
      <Heading level={1}>Beautifully designed components</Heading>
      <Text className="mt-1 max-w-lg" multiline>
        A set of beautifully-designed, accessible components. Works with your
        favorite frameworks. Open Source.
      </Text>
      <View className="flex-row gap-2 mt-3">
        <Button color="primary" asChild>
          <Link href="/docs">
            Get Started
            <RiArrowRightIcon />
          </Link>
        </Button>
        <Button variant="noFill">Use Magic</Button>
      </View>
    </View>
  );
}
