import { Button, Heading, View } from "natmfat";
import Link from "next/link";
import { Section } from "./components/Section";
import { AppSelector } from "./components/AppSelector";

export default function Home() {
  return (
    <>
      <Section className="py-16 relative gap-24">
        <View className="text-center items-center gap-4">
          <Heading
            level={1}
            className="text-header-big md:text-[64px]"
            multiline
          >
            Start building your next app.
          </Heading>
          <Heading
            level={2}
            className="max-w-xl text-subhead-big md:max-w-2xl md:text-header-default mx-auto font-regular"
            multiline
            color="dimmer"
          >
            Beautifully-designed, accessible components. Just import and go—no
            configuration required.
          </Heading>
          <View className="flex-row gap-2 mt-3">
            <Button color="primary" asChild>
              <Link
                href="/docs"
                className="shadow-[0_0_24px_var(--primary-dimmer)] text-subhead-big font-regular md:font-medium px-4 h-12 rounded-2xl md:px-6 md:h-16 md:rounded-3xl transition-all ease-snappy durations-snappy hover:shadow-[0_0_24px_var(--primary-default)]"
              >
                Get Started
              </Link>
            </Button>
          </View>
        </View>
      </Section>
      <AppSelector />
    </>
  );
}
