import type { MDXComponents } from "mdx/types";
import {
  Anchor,
  Heading,
  InlineCode,
  RiExternalLinkIcon,
  Separator,
  Text,
  View,
} from "natmfat";
import { CodeView } from "./app/docs/[...slug]/components/CodeView";
import Link from "next/link";
import { tokens } from "natmfat/lib/tokens";
import { cn } from "natmfat/lib/cn";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="headerBig"
        className="mt-6"
      />
    ),
    h2: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="headerDefault"
        className="mt-6"
      />
    ),
    h3: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="subheadBig"
        className="mt-4"
      />
    ),
    h4: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="subheadDefault"
        className="mt-4"
      />
    ),
    h5: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="subheadDefault"
        className="mt-2"
      />
    ),
    p: (props) => (
      <Text {...props} multiline color="default" className="mt-2" />
    ),
    hr: () => <Separator className="my-4" />,
    ul: (props) => <ul {...props} className="list-disc pl-6 mt-2" />,
    ol: (props) => <ul {...props} className="list-decimal pl-6 mt-2" />,
    li: (props) => (
      <li {...props} className="[&>ul]:mt-0 [&>ol]:mt-0 align-middle" />
    ),
    a: ({ href, children, ...props }) =>
      href.startsWith("https") ? (
        <Anchor
          {...props}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-block"
        >
          <span className="flex flex-row gap-0.5 w-fit items-center">
            {children}
            <RiExternalLinkIcon size={tokens.space12} />
          </span>
        </Anchor>
      ) : (
        <Anchor {...props} asChild>
          <Link href={href}>{children}</Link>
        </Anchor>
      ),
    code: ({ className, ...props }) => {
      return !className ? (
        <InlineCode {...props} />
      ) : (
        <CodeView
          className={cn(className, "max-w-full whitespace-pre-wrap mt-2")}
          {...props}
          // https://stackoverflow.com/questions/71907116/react-markdown-and-react-syntax-highlighter
          language={getLanguage(className)}
        />
      );
    },
    img: ({ alt, ...props }) => (
      <View className="flex-col items-center justify-center gap-2 mt-2 text-center">
        <View className="rounded-default border border-outline-dimmest bg-surface overflow-hidden">
          <img
            {...props}
            alt={
              alt ||
              "This image does not have a description. Please @ me on my socials to fix this as soon as possible!"
            }
            className="w-full height-auto"
          />
        </View>
        {alt ? (
          <Text size="small" color="dimmer" multiline>
            {alt}
          </Text>
        ) : null}
      </View>
    ),
  };
}

function getLanguage(className: string = "") {
  const language = (/language-(\w+)/.exec(className) || [])[0];
  return language ? language.substring("language-".length) : "text";
}
