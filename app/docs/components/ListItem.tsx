"use client";

import { Interactive, View } from "natmfat";
import { cn } from "natmfat/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ListItem({ href, title }: { href: string; title: string }) {
  const pathname = usePathname();

  return (
    <Interactive
      variant="listItem"
      className={cn(pathname === href && "bg-interactive")}
    >
      <View asChild>
        <Link href={href} className="px-3 py-1">
          {title}
        </Link>
      </View>
    </Interactive>
  );
}
