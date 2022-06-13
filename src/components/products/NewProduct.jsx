import React from 'react';
import {TextField,Button} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import "./product.css";
import "./NewProduct.css";
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



const NewProduct = () => {

    const [image, setImage] = React.useState("");
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const navigate = useNavigate();
    const classes = useStyles();
    
    const handleUpload = (e)=>{
        console.log("in post method");
        let fd = new FormData() //send to API
        fd.append('image',image)
        fd.append('name',name)
        fd.append('price',price)
        //setting form data
        //diff deployment environment
        //allows image to be stored  
        const config = {        
          headers: { 'content-type': 'multipart/form-data' }
        }
    
        axios.post("http://localhost:4000/api/products",fd,config).then((res)=>{
            console.log(res.data)
            toast.success("product added", {
            position: toast.POSITION.BOTTOM_RIGHT});
            navigate("/product", { replace: true });
        }).catch((err)=>{
             toast.error(err.response.data, {
            position: toast.POSITION.BOTTOM_RIGHT});
        });
        
    }

    return (
        <div className={classes.container}>
            <div className={classes.child} >
                <div className="NewProductDiv">
                    <input style={{marginTop: "30px"}}type="file" name="image" required onChange={(e) => {setImage(e.target.files[0]);}}/>
                    <br />
                    <TextField className="newProductName" label="name" fullwidth required  value={name} onChange={(e) => {setName(e.target.value);}}/>
                    <br />
                    <TextField className="newProductPrice" label="price" fullwidth required  value={price} onChange={(e) => {setPrice(e.target.value);}}/>
                    <br />
                   <Button className="newProductButton" variant="contained" color="primary" onClick={handleUpload}>
                            Submit
                    </Button>
                </div>
            </div>
        </div>
     );
};
 
export default NewProduct;


// import React from 'react';
// import {TextField,Button} from '@material-ui/core';
// import { useNavigate } from 'react-router-dom';
// import { makeStyles } from "@material-ui/core/styles";
// import axios from 'axios';
// import "./product.css";

// const useStyles = makeStyles((theme) => ({
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "300px",
      
//     },
//     child: {
//       width: "60%",
//     },
//   }));



// const NewProduct = () => {

//     const [image, setImage] = React.useState("");
//     const [name, setName] = React.useState("");
//     const [price, setPrice] = React.useState("");
//     const navigate = useNavigate();
//     const classes = useStyles();

    
//     const handleUpload = (e)=>{
//         console.log("in post method");
//         let fd = new FormData() //send to API
//         fd.append('image',image)
//         fd.append('name',name)
//         fd.append('price',price)
//         //setting form data
//         //diff deployment environment
//         const config = {        
//           headers: { 'content-type': 'multipart/form-data' }
//         }
    
//         axios.post("http://localhost:4000/api/products",fd,config).then((res)=>{
//             console.log(res.data)
//         }).catch((err)=>{
//             console.log(err);
//         });
//         navigate("/product", { replace: true });
//     }

//     return (
//         <div className={classes.container}>
//             <div className={classes.child} >
//                 <div className="NewProductDiv">
//                     <input style={{marginTop: "30px"}}type="file" name="image" required onChange={(e) => {setImage(e.target.files[0]);}}/>
//                     <br />
//                     <TextField className="newProductName" label="name" fullwidth required  value={name} onChange={(e) => {setName(e.target.value);}}/>
//                     <br />
//                     <TextField className="newProductPrice" label="price" fullwidth required  value={price} onChange={(e) => {setPrice(e.target.value);}}/>
//                     <br />
//                    <Button className="newProductButton" variant="contained" color="primary" onClick={handleUpload}>
//                             Submit
//                     </Button>
//                 </div>
//             </div>
//         </div>
//      );
// };
 
// export default NewProduct;