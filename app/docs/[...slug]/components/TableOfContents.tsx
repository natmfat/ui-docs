import { View, Text } from "natmfat";

export type Toc = {
  depth: number;
  value: string;
  id: string;
  children: Toc[];
};

export function TableOfContents({
  toc,
  className,
}: {
  toc: Toc["children"];
  className?: string;
}) {
  return (
    <View className={className} asChild>
      <ul>
        {toc.map(({ id, value, children }) => {
          return (
            <View key={value} asChild>
              <li>
                <Text asChild>
                  <a href={`#${id}`} className="w-fit py-0.5">
                    {value}
                  </a>
                </Text>
                {children && (
                  <TableOfContents toc={children} className="pl-3" />
                )}
              </li>
            </View>
          );
        })}
      </ul>
    </View>
  );
}
