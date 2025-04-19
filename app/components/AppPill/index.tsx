import { Pill } from "natmfat/components/Pill";

import { App as AppPillProps } from "./apps";

export function AppPill({ icon, name, description, href }: AppPillProps) {
  return (
    <Pill className="select-none mx-1 text-subhead-default px-3 h-8" variant="fill">
      {icon}
      {name}
    </Pill>
  );
}