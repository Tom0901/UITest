import Head from "next/head";
import styles from "../styles/Home.module.css";
import CustomButton from "../components/CustomButton";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snoop</title>
        <link rel="icon" href="/FinancesIcon.svg" />
      </Head>

      <main className={styles.main}>
        <CustomButton title="hello world" />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
