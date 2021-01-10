import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledButton = withStyles({
  root: {
    borderRadius: 30,
    border: 0,
    color: "white",
    backgroundColor: "#644dff",
    "&:hover": {
      backgroundColor: "#ff5001",
    },
    height: 48,
    padding: "0 30px",
    textTransform: "none",
  },
})(Button);

export default function CustomButton(props) {
  const { title } = props;
  return (
    <React.Fragment>
      <StyledButton>{title}</StyledButton>
    </React.Fragment>
  );
}
