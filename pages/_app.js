import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
