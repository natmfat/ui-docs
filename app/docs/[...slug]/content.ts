import fs from "fs/promises";
import path from "path";
import slugify from "slugify";

const CONTENT_DIR = path.join(process.cwd(), "./app/docs/content");

const GETTING_STARTED = "Getting Started";

export const CONTENT = {
  [GETTING_STARTED]: ["installation", "introduction"],
  Installation: ["vite"],
};

export function getSlugs() {
  const files: string[] = [];
  for (const heading in CONTENT) {
    CONTENT[heading as keyof typeof CONTENT].forEach((file) => {
      files.push(
        path.join(
          CONTENT_DIR,
          heading === GETTING_STARTED
            ? ""
            : slugify(heading.toLocaleLowerCase()),
          `${file}.mdx`
        )
      );
    });
  }

  const slugs = files.map((file) => ({
    slug: stripExtension(
      file.replace(new RegExp(`^${CONTENT_DIR}`), "")
    ).toLocaleLowerCase(),
  }));
  return slugs;
}

function stripExtension(file: string) {
  return file.replace(/\.mdx$/, "");
}
