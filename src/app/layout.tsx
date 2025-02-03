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
                <Group>
                  <div className="w-10 h-10 bg-[var(--mantine-color-primary-4)] rounded-full"></div>
                  <Text size="xl" fw={700} c="primary.8">
                    ChromeSub
                  </Text>
                </Group>
                <Button
                  component="a"
                  href="https://chrome.google.com/webstore"
                  variant="filled"
                  color="primary.4"
                >
                  Add to Chrome
                </Button>
              </Group>
            </AppShellHeader>

            <AppShellMain>
              {children}

              {/* Footer */}
              <footer className="bg-[var(--mantine-color-primary-8)] text-white">
                <Container size="lg" py="xl">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

                    {/* Product Column */}
                    <div className="col-span-1">
                      <Text fw={700} mb="md">
                        Product
                      </Text>
                      <Stack>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Features
                        </Text>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Documentation
                        </Text>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Chrome Store
                        </Text>
                      </Stack>
                    </div>

                    {/* Resources Column */}
                    <div className="col-span-1">
                      <Text fw={700} mb="md">
                        Resources
                      </Text>
                      <Stack>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Help Center
                        </Text>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Privacy Policy
                        </Text>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Terms of Service
                        </Text>
                      </Stack>
                    </div>

                    {/* Contact Column */}
                    <div className="col-span-1">
                      <Text fw={700} mb="md">
                        Contact
                      </Text>
                      <Stack>
                        <Group>
                          <IconMail size={16} />
                          <Text
                            component="a"
                            href="mailto:support@chromesub.com"
                            size="sm"
                            opacity={0.8}
                            className="hover:opacity-100"
                          >
                            support@chromesub.com
                          </Text>
                        </Group>
                        <Group mt="md">
                          <IconBrandGithub
                            size={20}
                            className="cursor-pointer hover:text-[var(--mantine-color-primary-4)]"
                          />
                          <IconBrandTwitter
                            size={20}
                            className="cursor-pointer hover:text-[var(--mantine-color-primary-4)]"
                          />
                        </Group>
                      </Stack>
                    </div>
                  </div>

                  {/* Copyright Bar */}
                  <div className="mt-16 pt-8 border-t border-white/10">
                    <Group justify="space-between">
                      <Text size="sm" opacity={0.8}>
                        © 2024 ChromeSub. All rights reserved.
                      </Text>
                      <Group>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Privacy
                        </Text>
                        <Text
                          component="a"
                          href="#"
                          size="sm"
                          opacity={0.8}
                          className="hover:opacity-100"
                        >
                          Terms
                        </Text>
                      </Group>
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
