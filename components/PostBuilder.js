import React from "react";
import PostItem from "./PostItem";
import { Typography } from "@material-ui/core";

export default function PostBuilder(props) {
  const { items, title } = props;
  return (
    <section>
      <Typography variant="h3" component="h2" color="textPrimary">
        {title}
      </Typography>
      {items.map((item) => (
        <React.Fragment>
          {item.type === "text" ? (
            <PostItem text={item.payload} />
          ) : (
            <React.Fragment>
              <img src={item.payload}></img>
            </React.Fragment>
          )}
        </React.Fragment>
      ))}
    </section>
  );
}
