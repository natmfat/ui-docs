// @ts-nocheck

import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/introduction",
        permanent: true,
      },
    ];
  },
  // experimental: {
  //   optimizePackageImports: ["natmfat"],
  // },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [["remark-frontmatter"], ["remark-mdx-frontmatter"]],
    rehypePlugins: [
      ["rehype-slug"],
      ["rehype-autolink-headings"],
      ["@stefanprobst/rehype-extract-toc"],
      ["@stefanprobst/rehype-extract-toc/mdx", { name: "toc" }],
    ],
  },
});

export default withMDX(nextConfig);
