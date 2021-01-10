import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import CustomButton from "../components/CustomButton";
import SnoopCard from "../components/SnoopCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snoop</title>
        <link rel="icon" href="/FinancesIcon.svg" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <SnoopCard
          icon="/FinancesIcon.svg"
          iconTitle="Finances"
          title="Neque porro quisquam est qui dolorem ipsum quia"
          copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
          btnTitle="Read more"
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
