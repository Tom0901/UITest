import React from "react";
import styles from "../styles/Home.module.css";

export default function Layout(props) {
  const classes = styles;
  return <main className={classes.main}>{props.children}</main>;
}
