import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.inner}>
        {children}
      </div>
      <Footer />
    </>
  );
}