import { Heading, View } from "natmfat";
import { getLayout } from "./[...slug]/content";
import { ListItem } from "./components/ListItem";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <View className="flex-row gap-6 flex-1 max-w-full">
      <View className="shrink-0 w-52 gap-6 max-h-screen overflow-y-scroll">
        {Object.entries(getLayout()).map(([heading, items]) => {
          return (
            <View key={heading} className="gap-2">
              <Heading level={1} className="px-3 font-bold" size="default">
                {heading}
              </Heading>
              <View>
                {items.map((props) => (
                  <ListItem {...props} key={props.slug} />
                ))}
              </View>
            </View>
          );
        })}
      </View>

      {children}
    </View>
  );
}
