"use client";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  DialogTitle,
  Interactive,
  Surface,
  Text,
  View,
  RiArrowRightIcon,
  RiBlueskyIcon,
  RiCommandIcon,
  RiExternalLinkIcon,
  RiGithubIcon,
  RiTwitterXIcon,
  RiCircleIcon,
} from "natmfat";
import { tokens } from "natmfat/lib/tokens";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { getLayout } from "../docs/[...slug]/content";

const commands: Record<
  string,
  {
    icon: ReactNode;
    name: string;
    href: string;
  }[]
> = {
  Navigation: [
    { icon: <RiArrowRightIcon />, name: "Home", href: "/" },
    { icon: <RiArrowRightIcon />, name: "Documentation", href: "/docs" },
    {
      icon: <RiArrowRightIcon />,
      name: "Components",
      href: "/docs/components/accordion",
    },
    { icon: <RiArrowRightIcon />, name: "Themes", href: "/themes" },
    { icon: <RiArrowRightIcon />, name: "Magic", href: "/docs/magic" },
  ],
  ...Object.entries(getLayout()).reduce((acc, [heading, subheadings]) => ({
    ...acc,
    [heading]: subheadings.map(({ title, href }) => ({
      icon: <RiCircleIcon />,
      name: title,
      href,
    })),
  }), {}),
  Socials: [
    {
      icon: <RiGithubIcon />,
      name: "GitHub",
      href: "https://github.com/natmfat/ui-docs",
    },
    {
      icon: <RiTwitterXIcon />,
      name: "X (Twitter)",
      href: "https://twitter.com/natmfat",
    },
  ],
};

const isExternal = (href: string) => href.startsWith("https");

export function Clui() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // clicked outside of modal
      if (
        !(
          ref.current &&
          e.target &&
          ref.current.contains(e.target as HTMLElement)
        )
      ) {
        setOpen(false);
      }
    });
  }, []);

  useHotkeys(
    "meta+k",
    (e) => {
      e.preventDefault();
      setOpen(true);
    },
    [open]
  );

  return (
    <>
      <Interactive>
        <View
          className="h-8 select-none flex-row text-foreground-dimmest hover:text-foreground-dimmer items-center justify-between gap-2 w-64 max-w-full shrink-1 px-1"
          onClick={() => setOpen(true)}
        >
          <Text className="pl-2">Search documentation...</Text>
          <Surface
            elevated
            className="flex-row items-center gap-1 text-small border border-outline-dimmest rounded-lg px-0.5"
          >
            <RiCommandIcon size={tokens.space12} />K
          </Surface>
        </View>
      </Interactive>

      <CommandDialog open={open} onOpenChange={setOpen} maxWidth="400px">
        <VisuallyHidden>
          <DialogTitle>Search and run commands.</DialogTitle>
        </VisuallyHidden>
        <Command ref={ref}>
          <CommandInput autoFocus placeholder="Search & run commands" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {Object.entries(commands).map(([heading, items]) => (
              <CommandGroup heading={heading} key={heading}>
                {items.map(({ icon, name, href }) => (
                  <CommandItem
                    key={name}
                    onSelect={() => {
                      isExternal(href) ? openNewTab(href) : router.push(href);
                      setOpen(false);
                    }}
                  >
                    {icon} {name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}

function openNewTab(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.setAttribute("target", "_blank");
  anchor.setAttribute("rel", "noreferrer");
  anchor.click();
}
