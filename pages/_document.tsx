import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>To-Do List App</title>
          <meta charSet="UTF-8"></meta>
          <meta
            name="viewport"
            content="minimum-scale=1, width=device-width, initial-scale=1 ,shrink-to-fit=no, viewport-fit=cover"
          ></meta>
          <meta
            name="description"
            content="ToDo List App created by Klaudia Zygmunt"
          />
          <meta name="keywords" content="TODO LIST APP PROJECT" />
          <link rel="icon" href="/logo_icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
