import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../theme/config'
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment key="key">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/img/logo.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="EPICE 2021" />
          <meta name="keywords" content="EPICE 2021" />
          <meta property="og:title" content="EPICE 2021" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://epice-app.vercel.app/" />
          <meta property="og:description" content="EPICE 2021" />
          <meta name="robots" content="index, follow" />
          <meta property="og:locale" content="en_EN" />
          <meta property="og:site_name" content="Landy" />
          <meta property="og:url" content="http://epice-app.vercel.app/" />
          <meta property="twitter:title" content="EPICE 2021" />
          <meta property="twitter:description" content="EPICE 2021" />
          <meta property="twitter:site" content="http://epice-app.vercel.app/" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}