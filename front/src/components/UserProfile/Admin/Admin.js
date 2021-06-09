import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import useStyles from "./styles";
import moment from "moment";
import { getusers, resetpassword, deleteuser } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const classes = useStyles();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [password, setPassword] = useState("");
  const [rowId, setRowId] = useState("");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.result.role === "admin") dispatch(getusers());
  }, [dispatch, user.result.role]);

  const filteredUsers = users?.data?.filter(
    ({ _id }) => _id !== user.result._id
  );

  const handleOpenModalPassword = (id) => {
    setIsChangingPassword(true);
    setRowId(id);
    setIsOpenModal(true);
  };

  const handleOpenModalDelete = (id) => {
    setIsChangingPassword(false);
    setRowId(id);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleChangePassword = () => {
    if (password.trim() !== "") {
      dispatch(resetpassword(rowId, { password }));
      setIsOpenModal(false);
    } else {
      setIsEmpty(true);
    }
  };

  const handleDeleteUser = () => {
    dispatch(deleteuser(rowId));
    setIsOpenModal(false);
    window.location.reload(false);
  };

  const modalPassword = () => {
    return (
      <div>
        <Dialog
          open={isOpenModal}
          onClose={handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {isChangingPassword ? "Cambiar contraseña" : "Eliminar usuario"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {isChangingPassword
                ? "Recuerda usar una contraseña que contenga como mínimo 6 carácteres, mayusculas, minusculas y numeros"
                : "Esta acción es irreversible. ¿Deseas eliminar permanentemente el usuario?"}
            </DialogContentText>
            {isChangingPassword ? (
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
            ) : null}
          </DialogContent>
          {isEmpty && (
            <DialogContentText
              color="secondary"
              style={{ paddingLeft: "20px" }}
            >
              La nueva contraseña es inválida
            </DialogContentText>
          )}
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancelar
            </Button>
            {isChangingPassword ? (
              <Button onClick={handleChangePassword} color="primary">
                Cambiar
              </Button>
            ) : (
              <Button onClick={handleDeleteUser} color="secondary">
                Eliminar
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return (
    <>
      {filteredUsers ? (
        <div>
        <Typography style={{ textAlign: "center", paddingBottom: 20}} color="secondary">DASHBOARD</Typography>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ width: 200 }}>
                    <Typography color="primary">
                      <strong>Nombre</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="center" style={{ width: 200 }}>
                    <Typography color="primary">
                      <strong>Email</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="center" style={{ width: 200 }}>
                    <Typography color="primary">
                      <strong>Rol</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="center" style={{ width: 200 }}>
                    <Typography color="primary">
                      <strong>Última conexión</strong>
                    </Typography>
                  </TableCell>
                  <TableCell align="center" style={{ width: 200 }}>
                    <Typography color="primary">
                      <strong>Acciones</strong>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((userRow) => (
                  <TableRow key={userRow._id}>
                    <TableCell align="center">{userRow.name}</TableCell>
                    <TableCell align="center">{userRow.email}</TableCell>
                    <TableCell align="center">
                      {userRow.role === "common" ? "Común" : "Administrador"}
                    </TableCell>
                    <TableCell align="center">
                      {moment(userRow.lastConnectionDate).fromNow()}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleOpenModalPassword(userRow._id)}
                      >
                        <VpnKeyIcon color="primary" />
                      </Button>
                      <Button
                        onClick={() => handleOpenModalDelete(userRow._id)}
                      >
                        <DeleteIcon color="secondary" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : null}
      {isOpenModal && modalPassword()}
    </>
  );
};

export default Admin;
