import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const ogRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            ogRenderPage({
                enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />)
            });
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps }
    } finally {
        sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
