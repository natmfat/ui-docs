"use client";

import { IconButton, RiClipboardIcon } from "natmfat";
import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";
import { ComponentProps, ReactNode, useMemo } from "react";
import { CodeBlock, sunburst } from "react-code-blocks";
import { copyToClipboard } from "natmfat/lib/copyToClipboard";

type CodeBlockProps = ComponentProps<typeof CodeBlock>;

export function CodeView({
  className,
  children,
  ...props
}: Omit<CodeBlockProps, "text"> & {
  language: string;
  className?: string;
  children?: ReactNode;
}) {
  const text = useMemo(() => getNodeText(children).trim(), [children]);
  return (
    <View
      className={cn(
        className,
        "mt-2 rounded-default overflow-hidden bg-surface relative font-mono"
      )}
    >
        <CodeBlock {...(
          {
            ...props,
            text,
            theme: sunburst,
            showLineNumbers: false,
          } satisfies CodeBlockProps
        )} />

      <IconButton
        alt="Copy to clipboard"
        className="absolute top-2 right-2 z-10"
        onClick={() => {
          copyToClipboard(text);
        }}
      >
        <RiClipboardIcon />
      </IconButton>
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
