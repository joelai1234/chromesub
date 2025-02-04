import type { Metadata } from "next";
import {
  ColorSchemeScript,
  createTheme,
  DEFAULT_THEME,
  MantineProvider,
  mergeMantineTheme,
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  Group,
  Button,
  Text,
  Stack,
} from "@mantine/core";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import { breakpoints, colors } from "./theme";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next App Mantine Tailwind Template",
  description: "Next App Mantine Tailwind Template",
};

const theme = mergeMantineTheme(
  DEFAULT_THEME,
  createTheme({
    fontFamily: geistSans.style.fontFamily,
    fontFamilyMonospace: geistMono.style.fontFamily,
    breakpoints,
    colors,
  }),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <ColorSchemeScript />
      </Head>
      <body className="antialiased">
        <MantineProvider theme={theme}>
          <AppShell header={{ height: 60 }} padding={0}>
            {/* Header */}
            <AppShellHeader className="bg-white border-b border-[var(--mantine-color-primary-1)]">
              <Group className="h-full px-md justify-between">
                <Link href="/" className="hover:no-underline">
                  <Group>
                    <div className="w-10 h-10 bg-[var(--mantine-color-primary-4)] rounded-full"></div>
                    <Text size="xl" fw={700} c="primary.8">
                      ChromeSub
                    </Text>
                  </Group>
                </Link>
                <Group>
                  <Link href="/pricing" passHref legacyBehavior>
                    <Button component="a" variant="subtle" color="primary.8">
                      Pricing
                    </Button>
                  </Link>
                  <Link
                    href="https://chrome.google.com/webstore"
                    passHref
                    legacyBehavior
                  >
                    <Button component="a" variant="filled" color="primary.4">
                      Add to Chrome
                    </Button>
                  </Link>
                </Group>
              </Group>
            </AppShellHeader>

            <AppShellMain>
              {children}

              {/* Footer */}
              <footer className="bg-[var(--mantine-color-primary-8)] text-white">
                <Container size="lg" py="xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-1">
                      <Group>
                        <div className="w-8 h-8 bg-[var(--mantine-color-primary-4)] rounded-full"></div>
                        <Text fw={700} size="lg">
                          ChromeSub
                        </Text>
                      </Group>
                      <Text size="sm" mt="md" opacity={0.8}>
                        Enhance your video experience with AI-powered subtitles
                        and advanced search capabilities.
                      </Text>
                    </div>

                    {/* Contact Column */}
                    <div className="col-span-1 md:text-right">
                      <Text fw={700} mb="md">
                        Contact
                      </Text>
                      <Stack>
                        <Group justify="end">
                          <IconMail size={16} />
                          <Text
                            component="a"
                            href="mailto:developer@tokenbricks.com"
                            size="sm"
                            opacity={0.8}
                            className="hover:opacity-100"
                          >
                            developer@tokenbricks.com
                          </Text>
                        </Group>
                      </Stack>
                    </div>
                  </div>

                  {/* Copyright Bar */}
                  <div className="mt-16 pt-8 border-t border-white/10">
                    <Group justify="space-between">
                      <Text size="sm" opacity={0.8}>
                        © 2025 ChromeSub. All rights reserved.
                      </Text>
                    </Group>
                  </div>
                </Container>
              </footer>
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
