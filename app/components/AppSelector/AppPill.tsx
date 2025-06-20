import { Pill } from "natmfat/components/Pill";

import { cn } from "natmfat/lib/cn";
import { App as AppPillProps } from "./apps";

export function AppPill({
  icon,
  name,
  previewSrc,
  active,
  setApp,
}: AppPillProps & { setApp: () => void; active?: boolean }) {
  return (
    <Pill
      className={cn(
        "mx-1 h-8 items-center gap-1.5 px-3 select-none",
        previewSrc
          ? "cursor-pointer"
          : "text-foreground-dimmer pointer-events-none",
      )}
      color={active ? "primary" : undefined}
      variant={previewSrc ? "fill" : "muteStatic"}
      onClick={() => {
        if (previewSrc) {
          setApp();
        }
      }}
    >
      {icon}
      <span className="text-subhead-default">{name}</span>
    </Pill>
  );
}
