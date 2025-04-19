import { RiBookIcon } from "natmfat/icons/RiBookIcon";
import { RiBrainIcon } from "natmfat/icons/RiBrainIcon";
import { RiCodeBlockIcon } from "natmfat/icons/RiCodeBlockIcon";
import { RiInfinityIcon } from "natmfat/icons/RiInfinityIcon";
import { RiLayoutIcon } from "natmfat/icons/RiLayoutIcon";
import { RiLinkIcon } from "natmfat/icons/RiLinkIcon";
import { RiPaletteIcon } from "natmfat/icons/RiPaletteIcon";
import { RiSafeIcon } from "natmfat/icons/RiSafeIcon";
import { RiSparklingIcon } from "natmfat/icons/RiSparklingIcon";
import { RiSquareIcon } from "natmfat/icons/RiSquareIcon";
import { ReactNode } from "react";

export type App = {
  icon: ReactNode;
  name: string;
  description: string;
  href: string;
};

export const apps: App[] = [
  {
    icon: <RiLinkIcon />,
    name: "natmf.at",
    description: "Yet another link shortener, because I won't pay for one.",
    href: "#",
  },
  {
    icon: <RiSquareIcon />,
    name: "gitlocker",
    description: "Password protected codebases, to showcase work to employers.",
    href: "#",
  },
  {
    icon: <RiLayoutIcon />,
    name: "ui",
    description: "A design system built with Radix Primitives and CSS modules",
    href: "#",
  },
  {
    icon: <RiSafeIcon />,
    name: "vault",
    description: "An image sharing service, with password protection.",
    href: "#",
  },
  {
    icon: <RiPaletteIcon />,
    name: "art",
    description: "Exploration of art and code. Made with p5.js and Three.js",
    href: "#",
  },
  {
    icon: <RiCodeBlockIcon />,
    name: "blockpit",
    description: "Creative coding with a custom block code editor and p5.js",
    href: "#",
  },
  {
    icon: <RiSparklingIcon />,
    name: "v0",
    description: "Generate React components with LLMs, locally",
    href: "#",
  },
  {
    icon: <RiBookIcon />,
    name: "library",
    description: "A list of recommended books and where to read them",
    href: "#",
  },

  {
    icon: <RiInfinityIcon />,
    name: "webring",
    description: "The 'phat' club. Comes with React components and an API.",
    href: "#",
  },
]