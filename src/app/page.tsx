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
      <AppShellHeader className="bg-white border-b border-[var(--mantine-color-primary-1)]">
        <Group className="h-full px-md justify-between">
          <Group>
            <div className="w-10 h-10 bg-[var(--mantine-color-primary-4)] rounded-full"></div>
            {/* <Image
              className="dark:invert"
              src="/logo.png" // You'll need to add your logo
              alt="Subtitle Extension Logo"
              width={40}
              height={40}
            /> */}
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
        {/* Hero Section */}
        <div className="bg-[var(--mantine-color-primary-0)]">
          <Container size="lg" py={{ base: "xl", md: "4rem" }}>
            <div className="text-center">
              <Title className="text-5xl font-bold mb-6" c="primary.8">
                Add Subtitles to Any Video
              </Title>
              <Text c="primary.8" className="text-xl max-w-2xl mx-auto mb-8">
                Transform your video watching experience with AI-powered
                subtitles. Perfect for learning, accessibility, and content
                creation.
              </Text>
              <Button
                size="xl"
                variant="filled"
                color="primary.4"
                className="mt-4"
              >
                Install Extension
              </Button>
            </div>
          </Container>
        </div>

        {/* Features Section */}
        <div className="bg-white">
          <Container size="lg" py={{ base: "xl", md: "4rem" }}>
            <Title order={2} ta="center" mb="xl" c="primary.8">
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
                    bg="primary.0"
                    className="hover:shadow-md transition-shadow"
                  >
                    <Icon
                      style={{ width: rem(50), height: rem(50) }}
                      stroke={1.5}
                      className="text-[var(--mantine-color-primary-4)]"
                    />
                    <Text fw={500} size="lg" mt="md" c="primary.8">
                      {feature.title}
                    </Text>
                    <Text size="sm" c="primary.8" mt="sm" opacity={0.8}>
                      {feature.description}
                    </Text>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Container>
        </div>

        {/* Demo Section */}
        <div className="bg-[var(--mantine-color-primary-0)]">
          <Container size="lg" py={{ base: "xl", md: "4rem" }}>
            <Title order={2} ta="center" mb="xl" c="primary.8">
              See How It Works
            </Title>
            <div className="aspect-video max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
              {/* Demo content placeholder */}
            </div>
          </Container>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--mantine-color-primary-4)]">
          <Container size="lg" py={{ base: "xl", md: "4rem" }}>
            <Title order={2} ta="center" mb="lg" c="white">
              Ready to Enhance Your Videos?
            </Title>
            <Text c="white" className="max-w-2xl mx-auto mb-8" opacity={0.9}>
              Join thousands of users who are already enjoying better video
              experiences with our subtitle extension.
            </Text>
            <Group justify="center">
              <Button size="xl" variant="white" c="primary.8">
                Add to Chrome - It's Free
              </Button>
            </Group>
          </Container>
        </div>
      </AppShellMain>
    </AppShell>
  );
}
