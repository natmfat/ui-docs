"use client";

import { useThemeContext } from "natmfat";
import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";
import { ComponentProps, ReactNode, useMemo } from "react";
import { CodeBlock, github, sunburst } from "react-code-blocks";
import { CopyIconButton } from "@/app/components/CopyButton";

type CodeBlockProps = ComponentProps<typeof CodeBlock>;

export function CodeView({
  className,
  children,
  disableCopy,
  ...props
}: Omit<CodeBlockProps, "text"> & {
  language: string;
  className?: string;
  children?: ReactNode;
  disableCopy?: boolean;
}) {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  const text = useMemo(() => getNodeText(children).trim(), [children]);
  return (
    <View
      className={cn(
        className,
        "rounded-default overflow-hidden relative font-mono max-h-96 px-1",
        isDark ? "bg-[#000]" : "bg-[#fff]"
      )}
    >
      <CodeBlock
        {...({
          ...props,
          text: text,
          theme: isDark ? sunburst : github,
          showLineNumbers: false,
        } satisfies CodeBlockProps)}
      />

      {!disableCopy ? <CopyIconButton text={text} className="z-10" /> : null}
    </View>
  );
}

// https://stackoverflow.com/questions/34204975/react-is-there-something-similar-to-node-textcontent
function getNodeText(node: ReactNode): string {
  if (node == null) return "";

  switch (typeof node) {
    case "string":
    case "number":
      return node.toString();

    case "boolean":
      return "";

    case "object": {
      if (node instanceof Array) {
        return node.map(getNodeText).join("");
      }
    }

    // eslint-ignore-line no-fallthrough
    default:
      console.warn("Unresolved `node` of type:", typeof node, node);
      return "";
  }
}
