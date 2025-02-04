"use client";

import {
  Container,
  Title,
  Text,
  Card,
  ThemeIcon,
  Button,
  rem,
  Group,
} from "@mantine/core";
import {
  IconDownload,
  IconClick,
  IconSearch,
  IconUpload,
  IconPlayerPlay,
} from "@tabler/icons-react";

type Step = {
  icon: typeof IconDownload;
  title: string;
  description: string;
  action?: {
    text: string;
    href: string;
  };
};

const steps: Step[] = [
  {
    icon: IconDownload,
    title: "Install the Extension",
    description: "Get ChromeSub from the Chrome Web Store to get started.",
    action: {
      text: "Add to Chrome",
      href: "https://chrome.google.com/webstore", // Update with actual store URL
    },
  },
  {
    icon: IconClick,
    title: "Access ChromeSub",
    description:
      'Click the extension icon in your browser\'s toolbar or right-click on any video and select "Add Subtitles."',
  },
  {
    icon: IconSearch,
    title: "Search for Subtitles",
    description:
      "Enter keywords to search for matching subtitles in our database. Each subtitle selection will consume one token from your account.",
  },
  {
    icon: IconUpload,
    title: "Upload Your Own Subtitles",
    description:
      "Alternatively, you can upload your own subtitle files in SRT or VTT format.",
  },
];

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-[var(--mantine-color-primary-0)]">
      <Container size="lg" py={{ base: "xl", md: "4rem" }}>
        {/* Header */}
        <div className="text-center mb-12">
          <Title c="primary.8" className="text-4xl font-bold mb-4">
            Getting Started with ChromeSub
          </Title>
          <Text c="primary.8" size="xl" className="max-w-2xl mx-auto">
            Follow these simple steps to enhance your videos with AI-powered
            subtitles
          </Text>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              shadow="sm"
              padding="xl"
              radius="md"
              mb="xl"
              className="bg-white"
            >
              <Group align="flex-start" wrap="nowrap">
                <ThemeIcon
                  size={44}
                  radius="md"
                  variant="light"
                  color="primary.4"
                >
                  <step.icon
                    style={{ width: rem(24), height: rem(24) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
                <div className="flex-grow">
                  <Text fw={500} size="lg" mb="xs" c="primary.8">
                    {index + 1}. {step.title}
                  </Text>
                  <Text
                    size="sm"
                    c="primary.8"
                    opacity={0.8}
                    mb={step.action ? "md" : 0}
                  >
                    {step.description}
                  </Text>
                  {step.action && (
                    <Button
                      component="a"
                      href={step.action.href}
                      target="_blank"
                      variant="light"
                      color="primary.4"
                      size="sm"
                      mt="sm"
                    >
                      {step.action.text}
                    </Button>
                  )}
                </div>
              </Group>
            </Card>
          ))}
        </div>

        {/* Demo Video Section */}
        <div className="mt-16 text-center">
          <Title order={2} c="primary.8" mb="xl">
            See How It Works
          </Title>
          <Card shadow="sm" padding="xl" radius="md" className="bg-white">
            <div className="aspect-video bg-[var(--mantine-color-primary-1)] rounded-md flex items-center justify-center">
              <Group>
                <IconPlayerPlay
                  size={48}
                  className="text-[var(--mantine-color-primary-4)]"
                />
                <Text size="lg" c="primary.8">
                  Demo Video Coming Soon
                </Text>
              </Group>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
