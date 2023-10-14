import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { SignupModalProvider } from "../src/context/ModalContext";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  const rfTheme = responsiveFontSizes(theme);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <React.Fragment>
      <Head>
        <title>AIW | Artificially intelligent workforce</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={rfTheme}>
        <SignupModalProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </SignupModalProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
