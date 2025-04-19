import { Pill } from "natmfat/components/Pill";

import { App as AppPillProps } from "./apps";
import { cn } from "natmfat/lib/cn";

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
        "select-none mx-1 px-3 h-8 gap-1.5 items-center",
        previewSrc
          ? "cursor-pointer"
          : "pointer-events-none text-foreground-dimmer"
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
