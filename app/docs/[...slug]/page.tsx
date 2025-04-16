import { notFound } from "next/navigation";
import { getSlugs } from "./content";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  try {
    const { default: Post } = await import(`../content/${slug.join("/")}.mdx`);
    return <Post />;
  } catch (e) {
    return notFound();
  }
}

export async function getStaticPaths() {
  return getSlugs();
}

export const dynamicParams = false;
