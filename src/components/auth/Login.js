import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { TextField, Button } from "@mui/material";
import userService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "60%",
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.child}>
        <TextField
          style={{marginTop: "30px"}}
          label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                toast.success("success", {
                position: toast.POSITION.BOTTOM_RIGHT});
               
                navigate("/product", { replace: true });
              })
              .catch((err) => { 
                toast.error(err.response.data, {
                  position: toast.POSITION.BOTTOM_RIGHT});
               });
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;