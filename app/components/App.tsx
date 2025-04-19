"use client";

import { Surface } from "natmfat/components/Surface";
import { View } from "natmfat/components/View";
import { App as AppProps } from "./AppMarquee/apps";
import { Button, RiLinkIcon } from "natmfat";
import { tokens } from "natmfat/lib/tokens";
import { CodeView } from "../docs/[...slug]/components/CodeView";

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
          {icon}
        </Surface>
        {name}
      </Surface>
      <Surface
        elevated
        className="p-3 rounded-b-default rounded-tr-default border border-outline-dimmest relative"
      >
        <Surface
          elevated
          className="border border-outline-dimmest  shadow-2 font-mono absolute top-0 right-0 translate-x-8 -translate-y-6 px-4 py-2 z-20 rounded-default"
        >
          <code>$ pnpm add natmfat</code>
        </Surface>

        <View className="shadow-2 absolute bottom-0 right-0 z-20 translate-x-8 translate-y-6 rounded-default border border-outline-dimmest">
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
          />

          <View className="absolute bottom-0 top-0 right-0 left-0 p-4">
            <View className="mt-auto gap-2">
              <Surface className="rounded-default shadow-1 w-fit">
                <Button
                  className="w-fit "
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
      </Surface>
    </View>
  );
}
