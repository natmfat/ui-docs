import {
  Anchor,
  IconButton,
  RiGithubIcon,
  Text,
  ThemeProvider,
  View,
} from "natmfat";
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { Clui } from "./components/Clui";
import { Logo } from "./components/Logo";
import { Section } from "./components/Section";
import { ThemeButton } from "./components/ThemeButton";
import { getTheme } from "./components/ThemeButton/theme";
import "./globals.css";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} ${fontMono.className} antialiased`}
        data-theme={theme}
      >
        <ThemeProvider value={theme}>
          <header className="border-outline-dimmest bg-surface fixed top-0 right-0 left-0 z-50 flex w-full border-b border-dashed">
            <Section
              top
              className="flex-row items-center justify-between px-6 py-4"
            >
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
                  <Link href="/docs/magic">Magic</Link>
                </nav>
              </View>
              <View className="flex-row items-center gap-2">
                <Clui />
                <View className="flex-row">
                  <IconButton alt="GitHub" className="h-8 w-8" asChild>
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

          <View className="min-h-screen items-stretch">
            <View className="h-full flex-1 pt-16">{children}</View>

            <Section>
              <footer>
                Built by{" "}
                <Anchor href="https://natmfat.com" external>
                  natmfat
                </Anchor>
                . The source code for documentation and examples is available on{" "}
                <Anchor href="https://github.com/natmfat/ui-docs" external>
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
