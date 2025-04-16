"use client";

import { Interactive, View } from "natmfat";
import { cn } from "natmfat/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ListItem({ slug, title }: { slug: string; title: string }) {
  const pathname = usePathname();

  return (
    <Interactive
      variant="listItem"
      className={cn(pathname === slug && "bg-interactive")}
    >
      <View asChild>
        <Link href={slug} className="px-1.5 py-0.5">
          {title}
        </Link>
      </View>
    </Interactive>
  );
}
