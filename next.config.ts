import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import withToc from "@stefanprobst/rehype-extract-toc";
import withTocExport from "@stefanprobst/rehype-extract-toc/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      withToc,
      [withTocExport, { name: "toc" }],
    ],
  },
});

export default withMDX(nextConfig);
