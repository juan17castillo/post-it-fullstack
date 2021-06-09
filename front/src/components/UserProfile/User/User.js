import React, { useState } from "react";
import { Card, Avatar, Grid, Typography } from "@material-ui/core/";
import moment from "moment";
import useStyles from "./styles";

const User = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      <Card className={classes.card}>
        <Avatar
          style={{ width: "100px", height: "100px" }}
          className={classes.purple}
          alt={user.result.name}
          src={user.result.imageUrl}
        >
          {user.result.name.charAt(0)}
        </Avatar>
        <Typography style={{ padding: "10px" }} variant="h4" color="primary">
          {user.result.name}
        </Typography>
        <Typography variant="h6">{user.result.email}</Typography>
        <Typography variant="h6">
          Rol: {user.result.role === "common" ? "Común" : "Administrador"}
        </Typography>
        <Typography variant="h6">Última conexión:</Typography>
        <Typography variant="h6" color="textSecondary">
          {moment(user.result.lastConnectionDate).fromNow()}
        </Typography>
      </Card>
    </Grid>
  );
};

export default User;
