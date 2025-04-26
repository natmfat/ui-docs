import { notFound } from "next/navigation";
import { getFooterButtons, getSlugs, importContent } from "./content";
import React from "react";
import { TableOfContents } from "../components/TableOfContents";
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
import { tryCatch } from "@/app/lib/tryCatch";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const footer = getFooterButtons(slug);
  const [data, error] = await tryCatch(importContent(slug));
  if (error) {
    console.error(error);
    return notFound();
  }
  const { Post, frontmatter, toc } = data;

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
          {frontmatter.base || frontmatter.baseReference ? (
            <View className="py-2 flex-row items-center gap-2">
              {frontmatter.base ? (
                <Button asChild size={tokens.space12} className="w-fit">
                  <a href={frontmatter.base} target="_blank" rel="noreferrer">
                    Docs
                    <RiExternalLinkIcon />
                  </a>
                </Button>
              ) : null}
              {frontmatter.baseReference ? (
                <Button asChild size={tokens.space12} className="w-fit">
                  <a
                    href={frontmatter.baseReference}
                    target="_blank"
                    rel="noreferrer"
                  >
                    API Reference
                    <RiExternalLinkIcon />
                  </a>
                </Button>
              ) : null}
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
}

export const generateStaticParams = async () => {
  return getSlugs();
};

export const dynamicParams = false;
