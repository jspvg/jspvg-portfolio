import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import "@/styles/toggle.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}
