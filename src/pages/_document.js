import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="favicon-dark.svg" media="(prefers-color-scheme: light)"/>
        <link rel="icon" type="image/png" href="favicon-dark.png" media="(prefers-color-scheme: light)"/>
        <link rel="icon" type="image/ico" href="favicon-dark.ico" media="(prefers-color-scheme: light)"/>

        <link rel="icon" type="image/svg+xml" href="favicon-light.svg" media="(prefers-color-scheme: dark)"/>
        <link rel="icon" type="image/png" href="favicon-light.png" media="(prefers-color-scheme: dark)"/>
        <link rel="icon" type="image/ico" href="favicon-light.ico" media="(prefers-color-scheme: dark)"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
