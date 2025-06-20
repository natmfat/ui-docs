import { Heading, View } from "natmfat";
import { Section } from "../components/Section";
import { getLayout } from "./[...slug]/content";
import { ListItem } from "./components/ListItem";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Section grow>
      <View className="h-full max-w-full flex-1 flex-row gap-6">
        <View className="max-h-[calc(100vh-8rem)] w-52 shrink-0 gap-6 overflow-y-scroll">
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
