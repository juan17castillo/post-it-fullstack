import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  GridList,
  GridListTile,
  TextField,
  Typography,
} from "@material-ui/core/";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { resetpassword } from "../../actions/auth";
import User from "./User/User";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Admin from "./Admin/Admin";
import Chart from "./Chart/Chart";

const UserProfile = () => {
  const classes = useStyles();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmitPassword = () => {
    if (password.trim() !== "") {
      const id = user.result._id;
      dispatch(resetpassword(id, { password }));
      setIsOpenModal(false);
    } else {
      setIsEmpty(true);
    }
  };

  const modalPassword = () => {
    return (
      <div>
        <Dialog
          open={isOpenModal}
          onClose={handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Cambiar contraseña</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Recuerda usar una contraseña que contenga como mínimo 6
              carácteres, mayusculas, minusculas y numeros
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nueva contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </DialogContent>
          {isEmpty && (
            <DialogContentText
              color="secondary"
              style={{ paddingLeft: "20px" }}
            >
              Tu nueva contraseña es inválida
            </DialogContentText>
          )}
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleSubmitPassword} color="primary">
              Cambiar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <>
      <GridList cellHeight={480} cols={2}>
        <GridListTile>
          <Chart />
        </GridListTile>
        <GridListTile style={{ marginTop: 80 }}>
          <User />
          <Grid style={{ display: "grid" }}>
            <Button color="secondary" onClick={handleOpenModal}>
              Cambiar contraseña
            </Button>
          </Grid>
          {isOpenModal && modalPassword()}
        </GridListTile>
      </GridList>
      <Admin />
    </>
  );
};

export default UserProfile;
