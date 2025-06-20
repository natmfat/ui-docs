import { tryCatch } from "@/app/lib/tryCatch";
import {
  Button,
  Heading,
  RiArrowLeftSIcon,
  RiArrowRightSIcon,
  RiExternalLinkIcon,
  Text,
  View,
} from "natmfat";
import { tokens } from "natmfat/lib/tokens";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TableOfContents } from "../components/TableOfContents";
import { getFooterButtons, getSlugs, importContent } from "./content";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const footer = getFooterButtons(slug);
  const result = await tryCatch(importContent(slug));
  if (result.error) {
    console.error(result);
    return notFound();
  }
  const { Post, frontmatter, toc } = result.data;

  return (
    <>
      <View className="max-w-full flex-1">
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
            <View className="flex-row items-center gap-2 py-2">
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
          <View className="w-full flex-1 gap-2 pt-6 [&>*:first-child]:mt-0">
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
