import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export default function CustomButton(props) {
  const { title, background, color, hover } = props;

  const StyledButton = withStyles({
    root: {
      borderRadius: 30,
      border: 0,
      color: `${color}`,
      backgroundColor: `${background}`,
      "&:hover": {
        backgroundColor: hover === true ? "#ff5001" : "#fff",
      },
      height: 40,
      padding: "0 30px",
      textTransform: "none",
    },
  })(Button);
  return (
    <React.Fragment>
      <StyledButton>{title}</StyledButton>
    </React.Fragment>
  );
}
