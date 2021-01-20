import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../styles/postBuilder.module.css";
import CustomButton from "./CustomButton";
import PostItem from "./PostItem";
import Author from "./Author";
import Link from "next/link";

export default function PostBuilder(props) {
  const { items, title } = props;
  return (
    <div className={styles.wrapper}>
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
                <img src={item.payload} className={styles.img}></img>
              </React.Fragment>
            )}
          </div>
        ))}
        <Link href="/">
          <a>
            <CustomButton
              title="Go Home"
              background={"#644dff"}
              color="white"
              hover={true}
            />
          </a>
        </Link>
      </section>
      <Author img="profile.jpg" date="18/09/2020" bio="Tom Jackson" />
    </div>
  );
}
