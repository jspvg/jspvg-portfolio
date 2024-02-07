import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import "@/styles/toggle.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
