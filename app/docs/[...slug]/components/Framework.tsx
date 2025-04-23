import {
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiVite,
} from "@icons-pack/react-simple-icons";
import { Heading, Interactive, View } from "natmfat";
import { rawTokenSubset } from "natmfat/lib/tokens";
import Link from "next/link";
import { cloneElement, ReactNode } from "react";

const frameworkToLogo = {
  "Next.js": <SiNextdotjs />,
  "React Router": <SiReactrouter />,
  Vite: <SiVite />,
  Manual: <SiReact />,
} as const;

export function FrameworkRoot({ children }: { children: ReactNode }) {
  return <View className="grid grid-cols-2 gap-3 mt-2">{children}</View>;
}

export function FrameworkItem({
  href,
  type,
}: {
  href: string;
  type: keyof typeof frameworkToLogo;
}) {
  return (
    <Interactive>
      <View asChild>
        <Link href={href} className="grid place-items-center gap-2 p-4">
          <View>
            {cloneElement(frameworkToLogo[type], {
              size: rawTokenSubset.space32,
            })}
          </View>
          <Heading level={3} size="subheadDefault">
            {type}
          </Heading>
        </Link>
      </View>
    </Interactive>
  );
}
