import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3, 2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: "160px",
  },
  appBarSearch: {
    borderRadius: "15px",
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  table: {
    minWidth: 650,
  },
}));
