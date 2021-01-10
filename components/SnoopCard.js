import React from "react";
import CustomButton from "../components/CustomButton";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  category: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "1.75rem",
  },
  iconLarge: {
    width: "2.25rem",
  },
  iconTitle: {
    color: "#4cae51",
    paddingLeft: ".5rem",
  },
});

export default function SnoopCard(props) {
  const { icon, iconTitle, title, titleIco, copy, btnTitle } = props;
  const classes = useStyles();
  return (
    <Card>
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
          gutterBottom
          variant="h5"
          component="h2"
          color="textPrimary"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          color="textPrimary"
        >
          {copy}
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton title={btnTitle} />
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
