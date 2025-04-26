"use client";

import { Surface } from "natmfat/components/Surface";
import { View } from "natmfat/components/View";
import { App as AppProps } from "./apps";
import { Button, RiLinkIcon } from "natmfat";
import { tokens } from "natmfat/lib/tokens";
import { CodeView } from "../../docs/components/CodeView";
import { IconSizeProvider } from "natmfat/icons/Icon";

export function App({ icon, name, href, previewSrc }: AppProps) {
  return (
    <View>
      <Surface
        className="rounded-t-default w-fit px-3 pt-2 flex-row items-center gap-3 text-subhead-default border-t border-x border-outline-dimmest z-10 translate-y-[1px]"
        elevated
      >
        <Surface
          elevated
          className="rounded-default grid place-items-center h-8 w-8"
        >
          <IconSizeProvider value={tokens.space20}>{icon}</IconSizeProvider>
        </Surface>
        {name}
      </Surface>
      <Surface
        elevated
        className="p-3 rounded-b-default rounded-tr-default border border-outline-dimmest relative"
      >
        <View className="shadow-2 absolute bottom-[2px] left-0 z-20 -translate-x-12 translate-y-12 rounded-default border border-outline-dimmest">
          <CodeView language="jsx" disableCopy>{`
import { Button } from "natmfat"

export const App = () => {
  return <Button>Hello World</Button>
}`}</CodeView>
        </View>

        <View className="overflow-hidden relative rounded-default border border-outline-dimmest">
          <img
            className="h-[30rem] max-w-full aspect-video object-cover object-left-top"
            src={previewSrc}
            alt=""
          />
        </View>
      </Surface>

      <View className="pt-2 items-end">
        <View className="mt-auto gap-2">
          <Surface className="rounded-default shadow-1 w-fit" elevated>
            <Button
              className="w-fit"
              size={tokens.space20}
              variant="outline"
              asChild
            >
              <a href={href} target="_blank" rel="noreferrer">
                <RiLinkIcon />
                Project Overview
              </a>
            </Button>
          </Surface>
        </View>
      </View>
    </View>
  );
}
