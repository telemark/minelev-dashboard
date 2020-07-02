import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='no'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
          <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color='#005260' />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <meta name='msapplication-TileColor' content='#005260' />
          <meta name='theme-color' content='#ffffff' />

          <link rel='manifest' href='/static/site.webmanifest' />
          <meta name='msapplication-config' content='/static/browserconfig.xml' />

          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css2?family=Nunito+Sans' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css2?family=Nunito' rel='stylesheet' />

          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='description' content='Dashboard for MinElev plattformen' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
