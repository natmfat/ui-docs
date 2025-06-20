"use client";

import { createContext, useContext, useState } from "react";
import { Section } from "../Section";
import { App } from "./App";
import { AppMarquee } from "./AppMarquee";
import { apps } from "./apps";

type AppContextStore = {
  app: string;
  setApp: (nextApp: string) => void;
};

const AppContext = createContext<AppContextStore>({
  app: "",
  setApp: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppSelector = () => {
  const [app, setApp] = useState<number>(0);

  return (
    <>
      <Section className="flex-row items-center gap-2">
        <AppMarquee app={app} setApp={setApp} />
      </Section>
      <Section grow className="bg-circle grid place-items-center py-16">
        <App {...apps[app]} />
      </Section>
    </>
  );
};
