"use client";

import { Button, RiLinkIcon } from "natmfat";
import { Surface } from "natmfat/components/Surface";
import { View } from "natmfat/components/View";
import { IconSizeProvider } from "natmfat/icons/Icon";
import { tokens } from "natmfat/lib/tokens";
import { CodeView } from "../../docs/components/CodeView";
import { App as AppProps } from "./apps";

export function App({ icon, name, href, previewSrc }: AppProps) {
  return (
    <View>
      <Surface
        className="rounded-t-default text-subhead-default border-outline-dimmest z-10 w-fit translate-y-[1px] flex-row items-center gap-3 border-x border-t px-3 pt-2"
        elevated
      >
        <Surface
          elevated
          className="rounded-default grid h-8 w-8 place-items-center"
        >
          <IconSizeProvider value={tokens.space20}>{icon}</IconSizeProvider>
        </Surface>
        {name}
      </Surface>
      <Surface
        elevated
        className="rounded-b-default rounded-tr-default border-outline-dimmest relative border p-3"
      >
        <View className="shadow-2 rounded-default border-outline-dimmest absolute bottom-[2px] left-0 z-20 -translate-x-12 translate-y-12 border">
          <CodeView language="jsx" disableCopy>{`
import { Button } from "natmfat"

export const App = () => {
  return <Button>Hello World</Button>
}`}</CodeView>
        </View>

        <View className="rounded-default border-outline-dimmest relative overflow-hidden border">
          <img
            className="aspect-video h-[30rem] max-w-full object-cover object-left-top"
            src={previewSrc}
            alt=""
          />
        </View>
      </Surface>

      <View className="items-end pt-2">
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
