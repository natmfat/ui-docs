import { RiProfileIcon } from "natmfat";
import { RiBookIcon } from "natmfat/icons/RiBookIcon";
import { RiCodeBlockIcon } from "natmfat/icons/RiCodeBlockIcon";
import { RiInfinityIcon } from "natmfat/icons/RiInfinityIcon";
import { RiLayoutIcon } from "natmfat/icons/RiLayoutIcon";
import { RiLinkIcon } from "natmfat/icons/RiLinkIcon";
import { RiPaletteIcon } from "natmfat/icons/RiPaletteIcon";
import { RiSafeIcon } from "natmfat/icons/RiSafeIcon";
import { RiSparklingIcon } from "natmfat/icons/RiSparklingIcon";
import { RiSquareIcon } from "natmfat/icons/RiSquareIcon";
import { ReactElement } from "react";

export type App = {
  icon: ReactElement;
  name: string;
  href: string;
  previewSrc?: string;
};

export const apps: App[] = [
  {
    icon: <RiCodeBlockIcon />,
    name: "blockpit",
    href: "https://www.natmfat.com/project/blockpit",
    previewSrc: "/preview/blockpit.png",
  },
  {
    icon: <RiLinkIcon />,
    name: "links",
    href: "#",
  },
  {
    icon: <RiSquareIcon />,
    name: "gitlocker",
    href: "#",
  },
  {
    icon: <RiLayoutIcon />,
    name: "ui",
    href: "#",
  },
  {
    icon: <RiSafeIcon />,
    name: "vault",
    href: "#",
  },
  {
    icon: <RiPaletteIcon />,
    name: "art",
    href: "#",
  },
  {
    icon: <RiSparklingIcon />,
    name: "v0",
    href: "https://www.natmfat.com/project/v0",
    previewSrc: "/preview/v0.png",
  },
  {
    icon: <RiBookIcon />,
    name: "library",
    href: "#",
  },
  {
    icon: <RiInfinityIcon />,
    name: "webring",
    href: "#",
  },
  {
    icon: <RiProfileIcon />,
    name: "portfolio",
    href: "https://www.natmfat.com/project/official-portfolio",
    previewSrc: "/preview/portfolio.png",
  },
];
