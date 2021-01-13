import React from "react";
import styles from "../styles/layout.module.css";

export default function Layout(props) {
  return <main className={styles.main}>{props.children}</main>;
}
