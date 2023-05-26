import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Avatar maker using sd" key="title" />
        <meta
          property="og:description"
          content="using a stable diffusion model, training it with my face and building an interface wrapper on top of it"
          key="description"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
