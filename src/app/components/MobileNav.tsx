"use client";

import { Burger, Drawer, Stack, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export function MobileNav() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const navigationLinks = (
    <Stack gap="xs">
      <Link href="/getting-started" passHref legacyBehavior>
        <Button component="a" variant="subtle" color="primary.8" fullWidth>
          Getting Started
        </Button>
      </Link>
      <Link href="/pricing" passHref legacyBehavior>
        <Button component="a" variant="subtle" color="primary.8" fullWidth>
          Pricing
        </Button>
      </Link>
      <Link href="https://chrome.google.com/webstore" passHref legacyBehavior>
        <Button component="a" variant="filled" color="primary.4" fullWidth>
          Add to Chrome
        </Button>
      </Link>
    </Stack>
  );

  return (
    <>
      <Burger opened={opened} onClick={toggle} className="md:hidden" />
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        className="md:hidden"
      >
        {navigationLinks}
      </Drawer>
    </>
  );
}
