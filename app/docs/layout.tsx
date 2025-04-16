import { View } from "natmfat";
import {} from "./[...slug]/content";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const files = await getFiles();

  return (
    <View>
      {/* {JSON.stringify(toLayout(files))} */}
      {children}
    </View>
  );
}

function capitalize(text: string) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");
}
