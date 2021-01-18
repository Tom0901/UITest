import React from "react";
import CustomButton from "../components/CustomButton";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";
import Link from "next/link";

export default function SnoopCard(props) {
  const { icon, iconTitle, title, titleIco, copy, btnTitle, iconColor } = props;
  const useStyles = makeStyles({
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
      color: `${iconColor}`,
      paddingLeft: ".5rem",
    },

    title: {
      marginBottom: "2rem",
    },
    copy: {
      marginBottom: "3rem",
    },
    newWrap: {
      display: "flex",
      alignItems: "flex-start",
    },
    new: {
      width: "3rem",
      height: "3rem",
      backgroundColor: "#736d8d",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: 600,
      boxShadow: "inset 0 0 10px #000000",
    },
  });
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
        <React.Fragment>
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
        </React.Fragment>
      </CardContent>
      <CardActions>
        <Link href={`/subjects/${iconTitle}`}>
          <a>
            <CustomButton
              title={btnTitle}
              background={"#644dff"}
              color="white"
              hover={true}
            />
          </a>
        </Link>
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
