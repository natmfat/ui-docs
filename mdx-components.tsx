import type { MDXComponents } from "mdx/types";
import { Anchor, Heading, InlineCode, Separator, Text, View } from "natmfat";
import { cn } from "natmfat/lib/cn";
import Link from "next/link";
import { CodeView } from "./app/docs/components/CodeView";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="headerBig"
        className="mt-4"
      />
    ),
    h2: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="headerDefault"
        className="mt-4"
      />
    ),
    h3: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="subheadBig"
        className="mt-2"
      />
    ),
    h4: (props) => (
      <Heading
        {...props}
        color="default"
        level={1}
        size="subheadDefault"
        className="mt-2"
      />
    ),
    h5: (props) => (
      <Heading {...props} color="default" level={1} size="subheadDefault" />
    ),
    p: (props) => <Text {...props} multiline color="default" />,
    hr: () => <Separator className="my-2" />,
    ul: (props) => <ul {...props} className="list-disc pl-6" />,
    ol: (props) => <ul {...props} className="list-decimal pl-6" />,
    li: (props) => (
      <li {...props} className="align-middle [&>ol]:mt-0 [&>ul]:mt-0" />
    ),
    a: ({ href, children, ...props }) =>
      href.startsWith("https") ? (
        <Anchor {...props} href={href} external>
          {children}
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
          className={cn(className, "max-w-full whitespace-pre-wrap")}
          {...props}
          // https://stackoverflow.com/questions/71907116/react-markdown-and-react-syntax-highlighter
          language={getLanguage(className)}
        />
      );
    },
    img: ({ alt, ...props }) => (
      <View className="flex-col items-center justify-center gap-2 text-center">
        <View className="rounded-default border-outline-dimmest bg-surface overflow-hidden border">
          <img
            {...props}
            alt={
              alt ||
              "This image does not have a description. Please @ me on my socials to fix this as soon as possible!"
            }
            className="height-auto w-full"
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
