import React from "react";
import styles from "./Header.module.scss";
import { FaEarlybirds } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.logo}>
      <FaEarlybirds size="3rem" />
      <h1>XYZ.company</h1>
    </div>
  );
}

export default Header;