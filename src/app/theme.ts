/** Custom theme */
import {
  DEFAULT_THEME,
  type MantineThemeColors,
  type MantineBreakpointsValues,
} from "@mantine/core";

// Custom color palette based on provided colors
const customColors = {
  primary: [
    "#F5F5F5", // 0 - Lightest gray
    "#E8E8E8", // 1
    "#DBDBDB", // 2
    "#CECECE", // 3
    "#48CFCB", // 4 - Secondary teal
    "#39CBC7", // 5
    "#229799", // 6 - Primary teal
    "#1B7A7C", // 7
    "#424242", // 8 - Dark gray
    "#363636", // 9 - Darkest
  ],
} as const;

export const colors: MantineThemeColors = {
  ...DEFAULT_THEME.colors,
  // Override or add custom colors
  primary: customColors.primary,
};

export const breakpoints: MantineBreakpointsValues = DEFAULT_THEME.breakpoints;
