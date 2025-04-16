import { Heading, Interactive, View } from "natmfat";
import { getLayout } from "./[...slug]/content";
import Link from "next/link";
import { ListItem } from "./components/ListItem";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <View className="flex-row gap-2">
      <View className="w-52 gap-6">
        {Object.entries(getLayout()).map(([heading, items]) => {
          return (
            <View key={heading}>
              <Heading level={3} className="px-1.5">
                {heading}
              </Heading>
              {items.map((props) => (
                <ListItem {...props} key={props.slug} />
              ))}
            </View>
          );
        })}
      </View>
      <View>{children}</View>
    </View>
  );
}
