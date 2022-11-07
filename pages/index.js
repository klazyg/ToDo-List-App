import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Button from "../components/Button/Button";
import TaskList from "../components/Tasklist/Tasklist";

export default function Home() {
  return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>ToDo List App</h1>
        </main>
      </div>
  );
}
