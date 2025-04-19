import { Pill } from "natmfat/components/Pill";

import { App as AppPillProps } from "./apps";
import { cn } from "natmfat/lib/cn";

export function AppPill({ icon, name, previewSrc , setApp}: AppPillProps & { setApp: () => void }) {
  return (
    <Pill
      className={cn("select-none mx-1 px-3 h-8 gap-1.5 items-center", !previewSrc && "pointer-events-none text-foreground-dimmer")}
      variant={previewSrc ? "fill" : "muteStatic"}
      onClick={() => {
        if(previewSrc) {
          setApp()
        }
      }}
    >
      {icon}
      <span className="text-subhead-default">{name}</span>
    </Pill>
  );
}
