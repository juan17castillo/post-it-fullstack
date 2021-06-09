import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import postitlogo from "../../images/PostItLogo.png";
import postitbrand from "../../images/PostItBrand.png";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const openUser = () => {
    history.push(`/user/${user.result._id}`);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");

    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img
          className={classes.image}
          src={postitlogo}
          alt="icon"
          height="65px"
        />
        <img src={postitbrand} alt="icon" height="60px" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
              onClick={openUser}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography
              className={classes.userName}
              variant="h6"
              onClick={openUser}
            >
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Cerrar sesión
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Iniciar sesión
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
