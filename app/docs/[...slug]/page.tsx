import { notFound } from "next/navigation";
import { getFooterButtons, getSlugs, importContent } from "./content";
import React from "react";
import { TableOfContents } from "./components/TableOfContents";
import {
  Button,
  Heading,
  RiArrowLeftSIcon,
  RiArrowRightSIcon,
  Text,
  View,
} from "natmfat";
import Link from "next/link";

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
      <View className="flex-1 flex-row gap-6">
        <View className="flex-1 w-full">
          <View className="w-full">
            <Heading level={1}>{frontmatter.title}</Heading>
            <Heading
              level={2}
              size="subheadDefault"
              className="text-foreground-dimmer mt-2"
            >
              {frontmatter.description}
            </Heading>
            <View className="flex-1 w-full [&>*:first-child]:mt-0 mt-6">
              <Post />
            </View>
          </View>

          <View className="flex-row justify-between">
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
      </View>
    );
  } catch (e) {
    return notFound();
  }
}

export async function getStaticPaths() {
  return getSlugs();
}

export const dynamicParams = false;
