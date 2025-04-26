import { Heading, View } from "natmfat";
import { getLayout } from "./content";
import { ListItem } from "./components/ListItem";
import { Section } from "../components/Section";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Section grow>
      <View className="flex-row gap-6 flex-1 max-w-full h-full">
        <View className="shrink-0 w-52 gap-6">
          {/* @todo sticky */}
          {Object.entries(getLayout()).map(([heading, items]) => {
            return (
              <View key={heading} className="gap-2">
                <Heading level={1} className="px-3 font-bold" size="default">
                  {heading}
                </Heading>
                <View>
                  {items.map((props) => (
                    <ListItem {...props} key={props.href} />
                  ))}
                </View>
              </View>
            );
          })}
        </View>

        {children}
      </View>
    </Section>
  );
}
