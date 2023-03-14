import NextHead from "next/head";

export default function Head({ title = "" }) {
  return (
    <NextHead>
      <title>
        {title}
        {title ? " | " : ""}portfolio
      </title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <link rel="icon" href="/logo_white.ico" />
    </NextHead>
  );
}
