import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../chakra-theme/theme";
import NextNProgressProps from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgressProps />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
