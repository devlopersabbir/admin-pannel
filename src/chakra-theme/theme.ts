import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  { config },
  {
    colors: {
      customText: {
        50: "#EAFAF1",
        100: "#D5F5E3",
        200: "#ABEBC6",
        300: "#82E0AA",
        400: "#58D68D",
        500: "#2ECC71",
        600: "#28B463",
        700: "#239B56",
        800: "#1D8348",
        900: "#186A3B",
      },
      hoverCorlo: {
        100: "#E67E22",
      },
      fontColor: {
        100: "#17202A",
      },
    },
    styles: {
      global: () => ({
        body: {
          bg: "blackAlpha.200",
        },
      }),
    },
  }
);
