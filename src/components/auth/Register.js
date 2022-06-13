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
const Register = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  const diffToast = () => {
    if(!name) {
      toast.error("name missing" , {
      position:"bottom-right"
    })};
   
    if(!email){
      toast.error("email missing", {
      position:"bottom-right" 
    })};
   
    if(!password){
      toast.error("password missing" , {
      position:"bottom-right" 
    })};
    
  }

  return (
    <div className={classes.container}>
      <div className={classes.child}>
        <TextField
         style={{marginTop: "70px"}}
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <TextField
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
              .register(name, email, password)
              .then((data) => { console.log(data);
                navigate("/login", { replace: true });
              })
              .catch((err) => { 
                toast.error(err.response.data, {
                  position: toast.POSITION.BOTTOM_RIGHT});
          },diffToast);
          }}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;