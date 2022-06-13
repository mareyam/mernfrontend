import {React} from "react";
import {Grid,Button} from "@material-ui/core";
import productService from "../services/ProductService";
import userService from "../services/UserService";
import { useNavigate, useParams} from 'react-router-dom';
import './product.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {withRouter} from "react-router";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SingleProduct.css";


const SingleProduct = (props) => {
    const locate_url ="http://localhost:4000";

    const {product, onDelete,history} = props;
    const navigate = useNavigate();
    const params = useParams();
    
    // console.log(params);
 


    return (
      <Grid item xs={6} md={8}>
        <div className="HomeImage3">
          <CardContent>
              <img
                className="SingleProductImage"
                src={`${locate_url}/${product.imagePath}`}
                alt="img"/>
                <Typography gutterBottom variant="h6" component="div" >
                  {product.name}
                </Typography>
                <Typography variant="p" color="text.secondary" component="div" >
                  Rs.{product.price}
                </Typography>
          </CardContent>

          <div style={{display:"flex"}}>
             <CardActions className="CardActions">
                 {userService.isAdmin() && (
                      <div className="SingleProductButtons" style={{marginBottom:"20%"}}>
                          <Button
                                color="secondary"
                                variant="contained"
                                fullWidth
                                style={{margin:"0px auto"}}
                                onClick={(e) => {
                                  productService.deleteProduct(product._id).then((data) => {
                                    console.log(data);
                                    onDelete();
                                    toast.warn("product deleted", {
                                     position: toast.POSITION.BOTTOM_RIGHT});
                                  });
                                }}> Delete
                            </Button>
                            <Button
                                style={{margin:"0px auto"}}
                                  color="primary"
                                  fullWidth
                                  variant="contained"
                                  onClick={(e) => {
                                    console.log("nav to update");
                                    navigate("/product/update/" + product._id, { replace: true });
                                    console.log(props.match.params.id);
                                  }}> Edit
                            </Button>
                      </div>
                    )}
                        <div style={{display:"block"}}>
                            {userService.isLoggedIn() && (
                              <>
                                <Button fullWidth color="primary" variant="contained">Add to cart</Button>
                              </>
                            )}
                        </div>
          
          </CardActions>
        </div>
        </div>
      </Grid>
    );
};
export default SingleProduct;

// productService.updateProduct(product._id).then((data) => {
//   console.log(data);
// });
// <Button
//               color="primary"
//               onClick={(e) => {
//                 navigate("/product/update" + product._id, { replace: true });
//               }}
//             >
//               {" "}
//               Edit
//             </Button>
// import {React} from "react";
// import {Grid,Button} from "@material-ui/core";
// import productService from "../services/ProductService";
// import { useNavigate, useParams} from 'react-router-dom';
// import './product.css';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

// const SingleProduct = (props) => {
//     const locate_url ="http://localhost:4000";

//     const {product, onDelete} = props;
//     const navigate = useNavigate();
//     const params = useParams();
    
//     console.log(params);
//     const id = params;


//     return (
//       <div className="container">
//         <Grid container spacing={2}>
//           <Grid item xs={6} md={8}>
//             <CardContent>
//               <img
//                 className="SingleProductImage"
//                 src={`${locate_url}/${product.imagePath}`}
//                 alt="img"
//               />
//               <Typography gutterBottom variant="h6" component="div">
//                 {product.name}
//               </Typography>
//               <Typography variant="p" color="text.secondary">
//                 Rs.{product.price}
//               </Typography>
//             </CardContent>

//             <CardActions className="CardActions">
//               <Button
//                 color="secondary"
//                 onClick={(e) => {
//                   productService.deleteProduct(product._id).then((data) => {
//                     console.log(data);
//                     onDelete();
//                   });
//                 }}
//               >
//                 Delete
//               </Button>

//               <Button
//                 color="primary"
//                 onClick={(e) => {
//                   navigate("/product/update/" + product._id, { replace: true });
//                 }}
//               >
//                 {" "}
//                 Edit
//               </Button>
//             </CardActions>
//           </Grid>
//         </Grid>
//       </div>
//     );
   
// };
// export default SingleProduct;


{/* <Card sx={{ maxWidth: 345 }}>
<CardMedia
  component="img"
  alt="green iguana"
  height="140"
  image="/static/images/cards/contemplative-reptile.jpg"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Lizard
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>
<CardActions>
            <Button color="secondary" onClick={(e) => {
                productService.deleteProduct(product._id)
                .then((data) => { console.log(data); onDelete();
                })
            }}>Delete</Button>

            <Button color="primary" onClick={(e)=> {
                 navigate('/product/update/'+product._id, { replace: true });  
            }}> Edit</Button>
</CardActions>
</Card> */}

// export default withRouter (SingleProduct);


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// export default function ComplexGrid() {
//   return (
//     <Paper
//       sx={{
//         p: 2,
//         margin: 'auto',
//         maxWidth: 500,
//         flexGrow: 1,
//         backgroundColor: (theme) =>
//           theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//       }}
//     >
//       <Grid container spacing={2}>
//         <Grid item>
//           <ButtonBase sx={{ width: 128, height: 128 }}>
//             <Img alt="complex" src="/static/images/grid/complex.jpg" />
//           </ButtonBase>
//         </Grid>
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
              
//               <Typography variant="body2" gutterBottom>
//                 Full resolution 1920x1080 • JPEG
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                 Remove
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <Typography variant="subtitle1" component="div">
//               $19.00
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }
