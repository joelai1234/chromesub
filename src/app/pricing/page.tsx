"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Button,
  List,
  ThemeIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

// Add this before the pricingPlans declaration
interface PricingPlan {
  title: string;
  price: number;
  tokens: number;
  pricePerToken: number;
  popular?: boolean;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Starter Pack",
    price: 20,
    tokens: 20,
    pricePerToken: 1,
    features: [
      "20 AI subtitle generation tokens",
      "Basic subtitle editing",
      "Export in SRT & VTT formats",
      "30-day token validity",
    ],
  },
  {
    title: "Value Pack",
    price: 40,
    tokens: 50,
    pricePerToken: 0.8,
    popular: true,
    features: [
      "50 AI subtitle generation tokens",
      "Advanced subtitle editing",
      "Export in all formats",
      "60-day token validity",
      "Priority support",
    ],
  },
] as const;

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--mantine-color-primary-0)]">
      <Container size="lg" py={{ base: "xl", md: "4rem" }}>
        {/* Header */}
        <div className="text-center mb-12">
          <Title c="primary.8" className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </Title>
          <Text c="primary.8" size="xl" className="max-w-2xl mx-auto">
            Choose the plan that works best for your needs
          </Text>
        </div>

        {/* Pricing Cards */}
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.title}
              shadow="sm"
              padding="xl"
              radius="md"
              className={`relative ${
                plan.popular
                  ? "border-2 border-[var(--mantine-color-primary-4)]"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-3 right-4 bg-[var(--mantine-color-primary-4)] text-white px-4 py-1 rounded-full text-sm">
                  Best Value
                </div>
              )}

              <Title order={3} mb="md" c="primary.8">
                {plan.title}
              </Title>

              <Group mb="md">
                <Text size="xl" span fw={700} c="primary.8">
                  ${plan.price}
                </Text>
                <Text size="sm" c="primary.8" opacity={0.8}>
                  for {plan.tokens} tokens
                </Text>
              </Group>

              <Text size="sm" c="primary.8" opacity={0.8} mb="xl">
                ${plan.pricePerToken} per token
              </Text>

              <List
                spacing="sm"
                size="sm"
                mb="xl"
                center
                icon={
                  <ThemeIcon color="primary.4" size={20} radius="xl">
                    <IconCheck size={12} />
                  </ThemeIcon>
                }
              >
                {plan.features.map((feature) => (
                  <List.Item key={feature}>{feature}</List.Item>
                ))}
              </List>

              <Button
                fullWidth
                size="lg"
                variant={plan.popular ? "filled" : "light"}
                color="primary.4"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </SimpleGrid>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <Title order={3} c="primary.8" mb="xl">
            Frequently Asked Questions
          </Title>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Card padding="lg">
              <Text fw={500} mb="sm" c="primary.8">
                What is a token?
              </Text>
              <Text size="sm" c="primary.8" opacity={0.8}>
                A token represents one video subtitle generation credit. One
                token can be used to generate subtitles for a video up to 10
                minutes in length.
              </Text>
            </Card>
            <Card padding="lg">
              <Text fw={500} mb="sm" c="primary.8">
                How long do tokens last?
              </Text>
              <Text size="sm" c="primary.8" opacity={0.8}>
                Tokens are valid for 30-60 days from the date of purchase,
                depending on your plan. Unused tokens will expire after this
                period.
              </Text>
            </Card>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}
