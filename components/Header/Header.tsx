import styles from "./Header.module.scss";
import { FaEarlybirds } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className={styles.position}>
      <div className={styles.logo}>
        <FaEarlybirds size="3rem" />
        <h1 className={styles.title}>To-Do List App</h1>
      </div>
    </header>
  );
};

export default Header;