import React from "react";
import CustomButton from "../components/CustomButton";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  category: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "1.75rem",
    cursor: "pointer",
  },
  iconLarge: {
    width: "2.25rem",
    cursor: "pointer",
  },
  iconTitle: {
    color: "#4cae51",
    paddingLeft: ".5rem",
  },

  title: {
    marginBottom: "2rem",
  },
  copy: {
    marginBottom: "3rem",
  },
});

export default function SnoopCard(props) {
  const { icon, iconTitle, title, titleIco, copy, btnTitle } = props;
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardContent className={classes.category}>
        <img alt="icon" src={icon} className={classes.icon} />
        <Typography
          variant="body2"
          component="h2"
          className={classes.iconTitle}
        >
          {iconTitle}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          color="textPrimary"
          className={classes.title}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          color="textPrimary"
          className={classes.copy}
        >
          {copy}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton
          title={btnTitle}
          background={"#644dff"}
          color="white"
          hover={true}
        />
        <img
          alt="pin icon"
          src="/pin.png"
          title="pin"
          className={classes.iconLarge}
        />
        <img
          alt="ellipsis icon "
          src="/More.png"
          title="ellipsis"
          className={classes.icon}
        />
      </CardActions>
    </Card>
  );
}
