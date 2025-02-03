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
    <AppShell header={{ height: 60 }} padding="md">
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
        {/* Hero Section */}
        <Container size="lg" className="pt-20 pb-16">
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

        {/* Features Section */}
        <Container size="lg" className="py-16">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} shadow="sm" padding="xl" radius="md">
                  <Icon
                    style={{ width: rem(50), height: rem(50) }}
                    stroke={1.5}
                    className="text-blue-500 mb-4"
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

        {/* Demo Section */}
        <Container size="lg" className="py-16 bg-gray-50 dark:bg-gray-900">
          <Title order={2} className="text-center mb-12">
            See How It Works
          </Title>
          <div className="aspect-video max-w-4xl mx-auto bg-gray-200 rounded-lg">
            {/* Add your demo video or screenshot here */}
          </div>
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
