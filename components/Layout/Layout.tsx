import React, { ReactNode } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className={styles.inner}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;