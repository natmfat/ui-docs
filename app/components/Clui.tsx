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
} from "natmfat";
import { tokens } from "natmfat/lib/tokens";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

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
    { icon: <RiArrowRightIcon />, name: "Tools", href: "/tools" },
    { icon: <RiArrowRightIcon />, name: "Resume", href: "/resume" },
  ],
  Projects: [
    {
      icon: <RiExternalLinkIcon />,
      name: "Blockpit",
      href: "https://blockpit.natmf.at",
    },
    {
      icon: <RiExternalLinkIcon />,
      name: "Creative Coding",
      href: "https://art.natmf.at",
    },
  ],
  Socials: [
    {
      icon: <RiGithubIcon />,
      name: "GitHub",
      href: "https://github.com/natmfat",
    },
    {
      icon: <RiBlueskyIcon />,
      name: "Bluesky",
      href: "https://bsky.app/profile/natmfat.bsky.social",
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
    "meta+j",
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
          className="flex-row items-center w-fit flex-grow-0 flex-shrink gap-2 pr-1 pl-2 h-8 select-none"
          onClick={() => setOpen(true)}
        >
          <Text color="dimmest">Search and run commands</Text>
          <Surface elevated className="bg-transparent pointer-events-none">
            <Interactive>
              <View className="flex flex-row items-center gap-1 py-0.5 px-1.5">
                <RiCommandIcon size={tokens.space12} />{" "}
                <Text size="small" className="font-mono">
                  {" "}
                  J
                </Text>
              </View>
            </Interactive>
          </Surface>
        </View>
      </Interactive>

      <CommandDialog open={open} onOpenChange={setOpen} maxWidth="400px">
        <VisuallyHidden>
          <DialogTitle>Search and run commands.</DialogTitle>
        </VisuallyHidden>
        <Command ref={ref}>
          {/* eslint-disable-next-line */}
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
