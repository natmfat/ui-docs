import path from "path";

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
    .join(
      heading === GETTING_STARTED
        ? ""
        : heading.split(" ").join("-").toLocaleLowerCase(),
      subheading
    )
    .toLocaleLowerCase();
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
      } else if (i < subheadings.length - 1) {
        // grab first subheading in next section
        const nextHeading = contentKeys[i + 1] as keyof typeof CONTENT;
        const nextSubheadings = CONTENT[nextHeading];
        const nextSubheading = nextSubheadings[nextSubheadings.length - 1];
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

function capitalize(text: string) {
  return text
    .split(/ |-|\//)
    .map((word) => word.charAt(0).toLocaleUpperCase() + word.substring(1))
    .join(" ");
}
