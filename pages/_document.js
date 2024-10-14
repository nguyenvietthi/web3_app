// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Default title for all pages" />
        <meta property="og:image" content="https://res.cloudinary.com/dppdtq0df/image/upload/v1705144092/head_lkdnjp.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
