import { View } from "natmfat";
import { getFiles, toLayout } from "./[...slug]/content";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const files = await getFiles();

  return (
    <View>
      {JSON.stringify(toLayout(files))}
      {children}
    </View>
  );
}
