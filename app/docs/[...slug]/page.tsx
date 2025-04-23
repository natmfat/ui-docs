import { notFound } from "next/navigation";
import { getFooterButtons, getSlugs, importContent } from "./content";
import React from "react";
import { TableOfContents } from "./components/TableOfContents";
import {
  Button,
  Heading,
  RiArrowLeftSIcon,
  RiArrowRightSIcon,
  RiExternalLinkIcon,
  Text,
  View,
} from "natmfat";
import Link from "next/link";
import { tokens } from "natmfat/lib/tokens";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const footer = getFooterButtons(slug);
  try {
    const { Post, frontmatter, toc } = await importContent(...slug);
    return (
      <>
        <View className="flex-1 max-w-full">
          <View className="w-full">
            <Heading level={1}>{frontmatter.title}</Heading>
            <Heading
              level={2}
              size="subheadDefault"
              className="text-foreground-dimmer mt-2"
            >
              {frontmatter.description}
            </Heading>
            {frontmatter.base ? (
              <View className="py-2 flex-row items-center gap-2">
                <Button asChild size={tokens.space12} className="w-fit">
                  <a href={frontmatter.base} target="_blank" rel="noreferrer">
                    Docs
                    <RiExternalLinkIcon />
                  </a>
                </Button>
                <Button asChild size={tokens.space12} className="w-fit">
                  <a
                    href={`${frontmatter.base}#api-reference`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    API Reference
                    <RiExternalLinkIcon />
                  </a>
                </Button>
              </View>
            ) : null}
            <View className="flex-1 w-full [&>*:first-child]:mt-0 pt-6 gap-2">
              <Post />
            </View>
          </View>

          <View className="flex-row justify-between pt-6">
            {footer.left ? (
              <Button variant="noFill" asChild>
                <Link href={footer.left.href}>
                  <RiArrowLeftSIcon />
                  {footer.left.title}
                </Link>
              </Button>
            ) : null}
            {footer.right ? (
              <Button variant="noFill" asChild className="ml-auto">
                <Link href={footer.right.href}>
                  {footer.right.title} <RiArrowRightSIcon />
                </Link>
              </Button>
            ) : null}
          </View>
        </View>
        <View className="w-52 shrink-0 gap-2">
          <Text className="font-bold">On This Page</Text>
          <TableOfContents toc={toc} />
        </View>
      </>
    );
  } catch (e) {
    console.error(e);
    return notFound();
  }
}

export const generateStaticParams = async () => {
  return getSlugs();
};

export const dynamicParams = false;
