import { Text, View } from "natmfat";

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
                  <a
                    href={`#${id}`}
                    className="text-foreground-dimmer hover:text-foreground-default ease-snappy duration-snappy w-fit py-0.5 transition-colors"
                  >
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
