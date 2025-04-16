import type { MDXComponents } from "mdx/types";
import { Anchor, Heading, Separator, Text, View } from "natmfat";

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
    hr: () => <Separator />,
    ul: (props) => <ul {...props} className="list-disc pl-6 mt-2" />,
    ol: (props) => <ul {...props} className="list-decimal pl-6 mt-2" />,
    li: (props) => (
      <li {...props} className="[&>ul]:mt-0 [&>ol]:mt-0 align-middle" />
    ),
    a: ({ href, ...props }) => (
      <Anchor
        {...props}
        href={href}
        {...(href.startsWith("https")
          ? {
              target: "_blank",
              rel: "noreferrer",
            }
          : {})}
      />
    ),
    // code: ({ className, ...props }) => {
    //   return (
    //     <CodeView
    //       className="mt-2"
    //       {...props}
    //       // https://stackoverflow.com/questions/71907116/react-markdown-and-react-syntax-highlighter
    //       language={getLanguage(className)}
    //     />
    //   );
    // },
    // eslint-disable-next-line
    img: ({ alt, ...props }) => (
      <View className="flex-col items-center justify-center gap-2 mt-2 text-center">
        <View className="rounded-default border border-interactive bg-surface overflow-hidden">
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
