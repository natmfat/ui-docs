import path from "path";
import { type Toc } from "./components/TableOfContents";
import { GetStaticPaths } from "next";

const GETTING_STARTED = "Getting Started";

export const CONTENT = {
  [GETTING_STARTED]: [
    "introduction",
    "installation",
    "typography",
    "theming",
    "colors",
  ],
  Installation: ["react-router", "next", "vite"],
  Components: [
    "accordion",
    "alert-dialog",
    "anchor",
    "avatar",
    "banner",
    "button",
    "button-group",
    "checkbox",
    "colorway",
    "command",
    "dialog",
    "icon-button",
    "inline-code",
    "input",
    "interactive",
    "label",
    "loading",
    "measure-bar",
    "multiline-input",
    "pill",
    "popover",
    "radio-group",
    "search-bar",
    "select",
    "separator",
    "slider",
    "stacked-avatars",
    "status-banner",
    "surface",
    "switch",
    "tabs",
    "theme-provider",
    "timestamp",
    "toast",
    "tooltip",
    "heading",
    "text",
  ].sort(),
};

export const getSlugs = (): Array<{ slug: string[] }> => {
  return Object.entries(CONTENT)
    .map(([key, values]) => {
      return values.map((value) => ({
        slug: [
          key === GETTING_STARTED
            ? ""
            : key.split(" ").join("-").toLocaleLowerCase(),
          value.toLocaleLowerCase(),
        ].filter(c => c.length > 0),
      }));
    })
    .flat(2);
};

function getSlug(heading: string, subheading: string) {
  return path
    .join(
      heading === GETTING_STARTED
        ? ""
        : heading.split(" ").join("-").toLocaleLowerCase(),
      subheading
    )
    .toLocaleLowerCase();
}

export async function importContent(...slug: string[]) {
  const {
    default: Post,
    frontmatter,
    toc,
  } = await import(`./content/${slug.join("/")}.mdx`);
  return {
    Post,
    frontmatter: frontmatter as { title: string; description: string },
    toc: toc as Toc["children"],
  };
}

function getDocHref(heading: string, subheading: string) {
  return `/docs/${getSlug(heading, subheading)}`;
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
      slug: getDocHref(key, value),
      title: capitalize(value),
    }));
  });
  return layout;
}

type FooterButton = {
  title: string;
  href: string;
};

export function getFooterButtons(slug: string[]): {
  left: FooterButton | null;
  right: FooterButton | null;
} {
  let heading = GETTING_STARTED;
  let subheading = slug[0];
  if (slug.length === 2) {
    [heading, subheading] = slug;
  }

  const contentKeys = Object.keys(CONTENT);
  for (let i = 0; i < contentKeys.length; i++) {
    const key = contentKeys[i];
    if (key.toLocaleLowerCase() === heading.toLocaleLowerCase()) {
      const subheadings = CONTENT[key as keyof typeof CONTENT].map((h) =>
        h.toLocaleLowerCase()
      );
      const j = subheadings.indexOf(subheading);

      if (j === -1) {
        // couldn't find subheading
        return { left: null, right: null };
      }

      let left = null;
      let right = null;
      if (j >= 1) {
        // grab prev subheading in the list
        const prevSubheading = subheadings[j - 1];
        left = {
          title: capitalize(prevSubheading),
          href: getDocHref(heading, prevSubheading),
        };
      } else if (i >= 1) {
        // grab last subheading in prev section
        const prevHeading = contentKeys[i - 1] as keyof typeof CONTENT;
        const prevSubheadings = CONTENT[prevHeading];
        const prevSubheading = prevSubheadings[prevSubheadings.length - 1];
        left = {
          title: capitalize(prevSubheading),
          href: getDocHref(prevHeading, prevSubheading),
        };
      }
      if (j < subheadings.length - 1) {
        // grab next subheading in the list
        const nextSubheading = subheadings[j + 1];
        right = {
          title: capitalize(nextSubheading),
          href: getDocHref(heading, nextSubheading),
        };
      } else if (i < contentKeys.length - 1) {
        // grab first subheading in next section
        const nextHeading = contentKeys[i + 1] as keyof typeof CONTENT;
        const nextSubheadings = CONTENT[nextHeading];
        const nextSubheading = nextSubheadings[0];
        right = {
          title: capitalize(nextSubheading),
          href: getDocHref(nextHeading, nextSubheading),
        };
      }
      return { left, right };
    }
  }
  return { left: null, right: null };
}

export function capitalize(text: string) {
  return text
    .split(/ |-|\//)
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");
}
