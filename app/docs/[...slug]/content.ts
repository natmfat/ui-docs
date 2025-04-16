import path from "path";
import slugify from "slugify";

const CONTENT_DIR = path.join(process.cwd(), "./app/docs/content");

const GETTING_STARTED = "Getting Started";

export const CONTENT = {
  [GETTING_STARTED]: ["introduction", "installation"],
  Installation: ["vite"],
};

export function getSlugs() {
  return Object.entries(CONTENT)
    .map(([key, values]) => {
      return values.map((value) => ({
        slug: getSlug(key, value),
      }));
    })
    .flat(2);
}

function getSlug(heading: string, subheading: string) {
  return path
    .join(heading === GETTING_STARTED ? "" : slugify(heading), subheading)
    .toLocaleLowerCase();
}

export function getLayout() {
  const layout: Record<
    string,
    {
      slug: string;
      title: string;
    }[]
  > = {};
  Object.entries(CONTENT).forEach(([key, values]) => {
    layout[key] = values.map((value) => ({
      slug: `/docs/${getSlug(key, value)}`,
      title: capitalize(value),
    }));
  });
  return layout;
}

function capitalize(text: string) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");
}
