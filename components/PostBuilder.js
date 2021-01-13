import React from "react";
import PostItem from "./PostItem";
import { Typography } from "@material-ui/core";
import styles from "../styles/postBuilder.module.css";

export default function PostBuilder(props) {
  const { items, title } = props;
  return (
    <section className={styles.layout}>
      <Typography variant="h3" component="h2" color="textPrimary">
        {title}
      </Typography>
      {items.map((item) => (
        <div className={styles.item}>
          {item.type === "text" ? (
            <PostItem text={item.payload} size="body2" />
          ) : item.type === "title" ? (
            <PostItem text={item.payload} size="h5" />
          ) : (
            <React.Fragment>
              <img src={item.payload}></img>
            </React.Fragment>
          )}
        </div>
      ))}
    </section>
  );
}
