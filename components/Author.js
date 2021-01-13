import React from "react";
import styles from "../styles/author.module.css";
import { Typography } from "@material-ui/core";

export default function Author(props) {
  const { img, date, bio } = props;
  return (
    <section className={styles.wrap}>
      <img src={`/${img}`} className={styles.img}></img>
      <Typography variant="body2">{date}</Typography>
      <Typography variant="body2">{bio}</Typography>
    </section>
  );
}
