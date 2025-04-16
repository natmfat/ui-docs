import fs from "fs/promises";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "./app/docs/content");

const GETTING_STARTED = "Getting Started";

const CONTENT = {
  [GETTING_STARTED]: ["installation", "introduction"],
  Installation: ["installation/vite"],
};

export async function getFiles(parentDir = CONTENT_DIR, parentName = "") {
  const files = (
    await Promise.all(
      (
        await fs.readdir(parentDir)
      ).map((item) =>
        item.endsWith(".mdx")
          ? item
          : getFiles(path.join(parentDir, item), `${item}/`)
      )
    )
  )
    .flat(Infinity)
    .map((item) => `${parentName}${item}`) as string[];

  return files;
}

// @todo also get headers in here
export function toStaticPaths(files: string[]) {
  const slugs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: stripExtension(file).toLocaleLowerCase() }));
  return slugs;
}

export function toLayout(files: string[]) {
  const layout: Record<string, string[]> = {};
  for (const file of files) {
    const parts = file
      .split("/")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);
    let heading = GETTING_STARTED;
    let subheading = parts[0];
    if (parts.length == 2) {
      [heading, subheading] = parts;
    }

    heading = capitalize(heading);
    subheading = capitalize(stripExtension(subheading));
    if (!(heading in layout)) {
      layout[heading] = [];
    }
    layout[heading].push(subheading);
  }

  return layout;
}

function stripExtension(file: string) {
  return file.replace(/\.mdx$/, "");
}

function capitalize(text: string) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");
}
