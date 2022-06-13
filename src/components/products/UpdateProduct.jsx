import React, { useEffect } from 'react';
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import makeStyles from '@mui/styles/makeStyles';
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

const UpdateProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [image, setImage] = React.useState("");
  const data = { name, price };

  const navigate = useNavigate();
  const params = useParams();
  const classes = useStyles();
  console.log(params.id);
  useEffect(()=>{
    axios
    .get("http://localhost:4000/api/products/"+ params.id)
    .then((res) => {
      console.log(res.data)
      setName(res.data.name)
      setPrice(res.data.price)
    }).catch(err => console.log(err))
  },[])

  const sendRequest = () => {
    let fd = new FormData() //send to API
    fd.append('image',image)
    fd.append('name',name)
    fd.append('price',price)

    const config = {        
      headers: { 'content-type': 'multipart/form-data' }
    }



    const id = params.id;
    const url = "http://localhost:4000/api/products/" + id;

  
    axios
      .put(url, fd,config)
      .then((res) => {
        console.log(res);
        navigate("/product");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
        position: toast.POSITION.BOTTOM_RIGHT});
      });

    
  };

  return (
    <div className={classes.container}>
      <div className={classes.child}>
        {/* image */}
        <h1>Update Product</h1>
        <input style={{marginTop: "30px"}}
            type="file" name="image" 
            required onChange={(e) => 
            {setImage(e.target.files[0]);}}
          />
        <TextField
          className="newProductName"
          label="name"
          fullwidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          className="newProductPrice"
          label="price"
          fullwidth
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <Button
          className="newProductButton"
          variant="contained"
          color="primary"
          onClick={sendRequest}
        >
          Update
        </Button>
      </div>
    </div>
  );
};
 
export default UpdateProduct;
// import React from 'react';
// import {Grid,TextField,Button} from '@mui/material';
// import axios from "axios";
// import { useNavigate,useParams } from 'react-router-dom';
// import { makeStyles } from "@mui/material/styles";

// import productsService from '../services/ProductService';

   

// const UpdateProduct = (props) => {
//     const [name, setName] = React.useState("");
//     const [price, setPrice] = React.useState("");
    
//       return (
//         <div>
//             <Grid container spacing={3}>
//                 <TextField className="" label="name" fullwidth value={name} onChange={(e) => {setName(e.target.value);}}/>
//                  <TextField className="" label="price" fullwidth value={price} onChange={(e) => {setPrice(e.target.value);}}/>
//                <Button variant="contained" color="primary" onClick={(e) => {
//                 console.log("in update product");
//                 axios.put("http://localhost:4000/api/products",{name, price})
//                 .then((res) => {
//                     console.log(res.data);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//                }}>
//                  Update
//                </Button>      
//             </Grid>
//         </div>  
//         )}
// export default UpdateProduct;

//versio till 3pm

// import React from 'react';
// import {Grid,TextField,Button} from '@mui/material';
// import axios from "axios";
// import { useNavigate,useParams } from 'react-router-dom';
// import { makeStyles } from "@mui/material/styles";

// import productsService from '../services/ProductService';
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
  
   

//     const UpdateProduct = (props) => {
//         const[image,setImage] = React.useState("");
//         const[name,setName] = React.useState("");
//         const[price,setPrice] = React.useState(0);
        
//         const navigate = useNavigate();
//         const params = useParams();
//         const classes = useStyles();
//         const id = params.id;
        
//         // console.log(id);
//         React.useEffect(() => {
//             productsService.getSingleProduct(id).then((data) => {
//                 // setImage(data.image);
//                 setName(data.name);
//                 setPrice(data.price);
//             });
//         }, []);
    
//     return (
//         <div className={classes.container}>
//             <div className={classes.child}>
//         {/* image */}
//         <h1>Update Product</h1>
//         <img onChange={(e) => {setImage(e.target.value);}} src={image}  />
//         <TextField className="newProductName" label="name" fullwidth value={name} onChange={(e) => {setName(e.target.value);}}/>
//         <TextField className="newProductPrice" label="price" fullwidth value={price} onChange={(e) => {setPrice(e.target.value);}}/>
//         <Button className="newProductButton" variant="contained" color="primary" onClick={ (e)=>{
//         console.log("in post method");
//         let fd = new FormData() //send to API
//         fd.append('name',name)
//         fd.append('price',price)
//         //setting form data
//         //diff deployment environment
//         const config = {        
//           headers: { 'content-type': 'multipart/form-data' }
//         }
    
//         axios.put("http://localhost:4000/api/products/"+id,fd,config).then((res)=>{
//             console.log(res.data)
//         }).catch((err)=>{
//             console.log(err);
//         });
//         navigate("/product", { replace: true });}}

//             >
//                 Update
//         </Button>
//     </div>
// </div>
//      );
// };
 
// export default UpdateProduct;
// import React from 'react';
// import {Grid,TextField,Button} from '@mui/material';
// import axios from "axios";
// import { useNavigate,useParams } from 'react-router-dom';
// import { makeStyles } from "@mui/material/styles";

// import productsService from '../services/ProductService';

   

// const UpdateProduct = (props) => {
//     const [name, setName] = React.useState("");
//     const [price, setPrice] = React.useState("");
    
//       return (
//         <div>
//             <Grid container spacing={3}>
//                 <TextField className="" label="name" fullwidth value={name} onChange={(e) => {setName(e.target.value);}}/>
//                  <TextField className="" label="price" fullwidth value={price} onChange={(e) => {setPrice(e.target.value);}}/>
//                <Button variant="contained" color="primary" onClick={(e) => {
//                 console.log("in update product");
//                 axios.put("http://localhost:4000/api/products",{name, price})
//                 .then((res) => {
//                     console.log(res.data);
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//                }}>
//                  Update
//                </Button>      
//             </Grid>
//         </div>  
//         )}
// export default UpdateProduct;



