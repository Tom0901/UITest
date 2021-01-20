import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import SnoopCard from "../components/SnoopCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scoop</title>
        <link rel="icon" href="/FinancesIcon.svg" />
      </Head>

      <Layout className={styles.main}>
        <NavBar />
        <div className={styles.flex1}>
          <SnoopCard
            icon="/FinancesIcon.svg"
            iconTitle="Finances"
            iconColor="#4cae51"
            title="Neque porro quisquam est qui dolorem ipsum quia"
            copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
            btnTitle="Read more"
          />
          <SnoopCard
            icon="/Travel.png"
            iconTitle="Money Insight"
            iconColor="#00bd9c"
            title="Neque porro quisquam est qui dolorem ipsum quia"
            copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
            btnTitle="Read more"
          />
          <SnoopCard
            icon="/Shopping.jpg"
            iconTitle="Shopping"
            iconColor="#00bcd4"
            title="Neque porro quisquam est qui dolorem ipsum quia"
            titleIco={false}
            copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
            btnTitle="Read more"
          />
          <SnoopCard
            icon="/Entertainment.png"
            iconTitle="Entertainment"
            iconColor="#455a64"
            title="Neque porro quisquam est qui dolorem ipsum quia"
            copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
            btnTitle="Read more"
          />
        </div>
        <div className={styles.flex2}>
          <SnoopCard
            icon="/Travel.png"
            iconTitle="Money Insight"
            iconColor="#00bd9c"
            title="Neque porro quisquam est qui dolorem ipsum quia"
            copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
            btnTitle="Read more"
          />
          <SnoopCard
            icon="/FinancesIcon.svg"
            iconTitle="Finances"
            iconColor="#4cae51"
            title="Neque porro quisquam est qui dolorem ipsum quia"
            copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
            btnTitle="Read more"
          />
          <img src="/hero-rain.jpg" className={styles.background} />
          <div className={styles.lastChild}>
            <SnoopCard
              icon="/Entertainment.png"
              iconTitle="Entertainment"
              iconColor="#455a64"
              title="Neque porro quisquam est qui dolorem ipsum quia"
              copy="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
              btnTitle="Read more"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
