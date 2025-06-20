import { Button, Heading, View } from "natmfat";
import Link from "next/link";
import { AppSelector } from "./components/AppSelector";
import { Section } from "./components/Section";

export default function Home() {
  return (
    <>
      <Section className="relative gap-24 py-16">
        <View className="items-center gap-4 text-center">
          <Heading
            level={1}
            className="text-header-big md:text-[64px]"
            multiline
          >
            Start building your next app.
          </Heading>
          <Heading
            level={2}
            className="text-subhead-big md:text-header-default font-regular mx-auto max-w-xl md:max-w-2xl"
            multiline
            color="dimmer"
          >
            Beautifully-designed, accessible components. Just import and go—no
            configuration required.
          </Heading>
          <View className="mt-3 flex-row gap-2">
            <Button color="primary" asChild>
              <Link
                href="/docs"
                className="text-subhead-big font-regular ease-snappy durations-snappy h-12 rounded-2xl px-4 shadow-[0_0_24px_var(--primary-dimmer)] transition-all hover:shadow-[0_0_24px_var(--primary-default)] md:h-16 md:rounded-3xl md:px-6 md:font-medium"
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
