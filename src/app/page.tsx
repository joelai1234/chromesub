import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  Group,
  Button,
  Title,
  Text,
  Card,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { IconBadgeCc, IconUpload, IconSearch } from "@tabler/icons-react";
import Image from "next/image";

const features = [
  {
    icon: IconBadgeCc,
    title: "Add Subtitles",
    description:
      "Automatically add subtitles to any video content with just one click",
  },
  {
    icon: IconUpload,
    title: "Custom Subtitles",
    description:
      "Upload your own subtitle files in multiple formats including SRT and VTT",
  },
  {
    icon: IconSearch,
    title: "AI-Powered Search",
    description:
      "Find precise moments in videos using our advanced AI-generated subtitle search",
  },
] as const;

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding={0}>
      <AppShellHeader>
        <Group className="h-full px-md justify-between">
          <Group>
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
            {/* <Image
              className="dark:invert"
              src="/logo.png" // You'll need to add your logo
              alt="Subtitle Extension Logo"
              width={40}
              height={40}
            /> */}
            <Text size="xl" fw={700}>
              SubtitlePro
            </Text>
          </Group>
          <Button
            component="a"
            href="https://chrome.google.com/webstore" // Add your extension link
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            Add to Chrome
          </Button>
        </Group>
      </AppShellHeader>

      <AppShellMain>
        {/* Hero Section - Using Mantine's built-in colors */}
        <div className="bg-[var(--mantine-color-blue-0)] dark:bg-[var(--mantine-color-dark-8)]">
          <Container size="lg" py={{ base: "xl", md: "4rem" }}>
            <div className="text-center">
              <Title className="text-5xl font-bold mb-6">
                Add Subtitles to Any Video
              </Title>
              <Text c="dimmed" className="text-xl max-w-2xl mx-auto mb-8">
                Transform your video watching experience with AI-powered
                subtitles. Perfect for learning, accessibility, and content
                creation.
              </Text>
              <Button
                size="xl"
                variant="gradient"
                gradient={{ from: "blue", to: "cyan" }}
                className="mt-4"
              >
                Install Extension
              </Button>
            </div>
          </Container>
        </div>

        {/* Features Section */}
        <div className="bg-[var(--mantine-color-white)] dark:bg-[var(--mantine-color-dark-7)]">
          <Container size="lg" py={{ base: "xl", md: "4rem" }}>
            <Title order={2} ta="center" mb="xl">
              Key Features
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={feature.title}
                    shadow="sm"
                    padding="xl"
                    radius="md"
                    bg="var(--mantine-color-gray-0)"
                    className="dark:bg-[var(--mantine-color-dark-6)]"
                  >
                    <Icon
                      style={{ width: rem(50), height: rem(50) }}
                      stroke={1.5}
                      className="text-[var(--mantine-color-blue-6)]"
                    />
                    <Text fw={500} size="lg" mt="md">
                      {feature.title}
                    </Text>
                    <Text size="sm" c="dimmed" mt="sm">
                      {feature.description}
                    </Text>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Container>
        </div>

        {/* Demo Section */}
        <div className="bg-[var(--mantine-color-gray-1)] dark:bg-[var(--mantine-color-dark-6)]">
          <Container size="lg" py={{ base: "xl", md: "4rem" }}>
            <Title order={2} ta="center" mb="xl">
              See How It Works
            </Title>
            <div className="aspect-video max-w-4xl mx-auto bg-[var(--mantine-color-white)] dark:bg-[var(--mantine-color-dark-5)] rounded-xl shadow-lg">
              {/* Demo content placeholder */}
            </div>
          </Container>
        </div>

        {/* CTA Section - Using Mantine's gradient */}
        <div
          style={{
            background:
              "linear-gradient(45deg, var(--mantine-color-blue-6), var(--mantine-color-cyan-5))",
          }}
        >
          <Container
            size="lg"
            py={{ base: "xl", md: "4rem" }}
            className="text-white"
          >
            <Title order={2} ta="center" mb="lg" c="white">
              Ready to Enhance Your Videos?
            </Title>
            <Text className="max-w-2xl mx-auto mb-8 opacity-90">
              Join thousands of users who are already enjoying better video
              experiences with our subtitle extension.
            </Text>
            <Group justify="center">
              <Button size="xl" variant="white" color="dark">
                Add to Chrome - It's Free
              </Button>
            </Group>
          </Container>
        </div>
      </AppShellMain>
    </AppShell>
  );
}
