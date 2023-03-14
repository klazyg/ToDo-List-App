import Layout from "../components/Layout/Layout";
import Head from 'next/head';
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>To-Do List App</title>
        <meta name="description" content="ToDo List App created by Klaudia Zygmunt" />
        <meta name="keywords" content="TODO LIST APP PROJECT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_icon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
