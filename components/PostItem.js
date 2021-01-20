import { Typography } from "@material-ui/core";
import React from "react";

export default function PostItem(props) {
  const { text, size } = props;
  return (
    <Typography variant={size} component="p">
      {text}
    </Typography>
  );
}
