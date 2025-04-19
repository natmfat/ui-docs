"use client";

import { Section } from "./Section";
import { AppMarquee } from "./AppMarquee";
import { apps } from "./AppMarquee/apps";
import { App } from "./App";
import { createContext, useContext, useState } from "react";

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
     <Section className="flex-row gap-2 items-center">
        <AppMarquee setApp={setApp} />
      </Section>
      <Section grow className="grid place-items-center py-16 bg-circle">
        <App {...apps[app]} />
      </Section>
    </>
  );
};
