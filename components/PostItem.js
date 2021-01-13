import { Typography } from "@material-ui/core";
import React from "react";

export default function PostItem(props) {
  const { text } = props;
  return <Typography>{text}</Typography>;
}
