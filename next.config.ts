import type { NextConfig, Redirect } from "next";
import createMDX from "@next/mdx";

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
  transpilePackages: ["shiki"],
  experimental: {
    optimizePackageImports: ["shiki"],
  },
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
