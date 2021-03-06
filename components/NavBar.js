import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "./CustomButton";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    textAlign: "center",
  },
  btnWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1.75rem",
  },
});

export default function NavBar(props) {
  const { background, color } = props;
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h3"
        component="h2"
        className={classes.typography}
        color="textPrimary"
      >
        Scoops
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="h2"
        className={classes.typography}
        color="textPrimary"
      >
        Here are your latest scoops. Hope they help.
      </Typography>
      <div className={classes.btnWrap}>
        <CustomButton
          title="Latest"
          background="#ff5001"
          color="white"
          hover={true}
        />
      </div>
    </div>
  );
}
