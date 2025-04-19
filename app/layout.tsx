import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import {
  Anchor,
  IconButton,
  Interactive,
  RiCommandIcon,
  RiGithubIcon,
  Surface,
  Text,
  ThemeProvider,
  View,
} from "natmfat";
import { tokens } from "natmfat/lib/tokens";
import Link from "next/link";
import { Section } from "./components/Section";
import { ThemeButton } from "./components/ThemeButton";
import { Logo } from "./components/Logo";
import { Clui } from "./components/Clui";

const fontMono = IBM_Plex_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-family-code",
});

const fontSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-family-default",
});

export const metadata: Metadata = {
  title: "natmfat/ui",
  description:
    "A set of beautifully-designed, accessible components. Works with your favorite frameworks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} ${fontMono.className} antialiased`}
        data-theme="dark"
      >
        <ThemeProvider>
          <header className="flex border-b border-outline-dimmest border-dashed fixed left-0 right-0 top-0 bg-surface z-50 w-full">
            <Section top className="flex-row justify-between items-center px-6 py-4">
              <View asChild>
                <nav className="flex-row items-center gap-4">
                  <View className="flex-row items-center gap-2" asChild>
                    <Link href="/">
                      <Logo />
                      <Text className="text-subhead-default font-bold">
                        natmfat/ui
                      </Text>
                    </Link>
                  </View>
                  <Link href="/docs">Docs</Link>
                  <Link href="/docs/components/accordion">Components</Link>
                  <Link href="/themes">Themes</Link>
                  <Link href="/magic">Magic</Link>
                </nav>
              </View>
              <View className="flex-row items-center gap-2">
                <Clui />
                <View className="flex-row">
                  <IconButton alt="GitHub" className="w-8 h-8" asChild>
                    <a
                      href="https://github.com/natmfat/ui-docs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <RiGithubIcon />
                    </a>
                  </IconButton>
                  <ThemeButton />
                </View>
              </View>
            </Section>
          </header>

          <View className="items-stretch min-h-screen">
            <View className="pt-16 flex-1 h-full">{children}</View>

            <Section>
              <footer>
                Built by{" "}
                <Anchor
                  href="https://natmfat.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  natmfat
                </Anchor>
                . The source code for documentation and examples is available on{" "}
                <Anchor
                  href="https://github.com/natmfat/ui-docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Anchor>
                .
              </footer>
            </Section>
          </View>
        </ThemeProvider>
      </body>
    </html>
  );
}
