import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

import { useEffect, useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
