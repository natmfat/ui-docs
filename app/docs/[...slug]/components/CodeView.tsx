"use client";

import { IconButton, RiClipboardIcon } from "natmfat";
import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";
import { ComponentProps, ReactNode, useMemo } from "react";
import { CodeBlock, sunburst } from "react-code-blocks";

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
  const codeBlockProps = {
    ...props,
    text,
    theme: sunburst,
    showLineNumbers: false,
  } satisfies CodeBlockProps;
  return (
    <View
      className={cn(
        className,
        "border border-interactive rounded-default overflow-hidden bg-surface relative"
      )}
    >
      <CodeBlock {...codeBlockProps} />

      <IconButton
        alt="Copy to clipboard"
        className="absolute top-2 right-2 z-10"
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
