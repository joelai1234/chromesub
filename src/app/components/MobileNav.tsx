"use client";

import { Burger, Drawer, Stack, Button, Title, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconBadgeCc } from "@tabler/icons-react";

export function MobileNav() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleLinkClick = () => {
    close();
  };

  const drawerTitle = (
    <Group>
      <IconBadgeCc
        size={32}
        className="text-[var(--mantine-color-primary-4)]"
      />
      <Title order={3} c="primary.8">
        ChromeSub
      </Title>
    </Group>
  );

  const navigationLinks = (
    <Stack gap="xs">
      <Link href="/" passHref legacyBehavior>
        <Button
          component="a"
          variant="subtle"
          color="primary.8"
          fullWidth
          size="lg"
          onClick={handleLinkClick}
          className="h-[50px] text-lg hover:bg-[var(--mantine-color-primary-0)]"
        >
          Home
        </Button>
      </Link>
      <Link href="/getting-started" passHref legacyBehavior>
        <Button
          component="a"
          variant="subtle"
          color="primary.8"
          fullWidth
          size="lg"
          onClick={handleLinkClick}
          className="h-[50px] text-lg hover:bg-[var(--mantine-color-primary-0)]"
        >
          Getting Started
        </Button>
      </Link>
      <Link href="/pricing" passHref legacyBehavior>
        <Button
          component="a"
          variant="subtle"
          color="primary.8"
          fullWidth
          size="lg"
          onClick={handleLinkClick}
          className="h-[50px] text-lg hover:bg-[var(--mantine-color-primary-0)]"
        >
          Pricing
        </Button>
      </Link>
      <Link href="https://chrome.google.com/webstore" passHref legacyBehavior>
        <Button
          component="a"
          variant="filled"
          color="primary.4"
          fullWidth
          size="lg"
          onClick={handleLinkClick}
          className="h-[50px] text-lg mt-md"
        >
          Add to Chrome
        </Button>
      </Link>
    </Stack>
  );

  return (
    <>
      <Burger
        opened={opened}
        onClick={toggle}
        className="md:hidden text-[var(--mantine-color-primary-8)]"
      />
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        className="md:hidden"
        title={drawerTitle}
        closeButtonProps={{
          size: "lg",
          color: "gray",
          className: "text-[var(--mantine-color-primary-8)]",
        }}
        transitionProps={{
          transition: "slide-right",
          duration: 250,
        }}
        overlayProps={{
          blur: 4,
          opacity: 0.55,
        }}
      >
        {navigationLinks}
      </Drawer>
    </>
  );
}
