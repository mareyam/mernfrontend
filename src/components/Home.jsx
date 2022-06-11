import React from 'react';
import './Product.css';
import { Col, Row,Container } from "react-bootstrap"
import Tshirts from "./Tshirts.json";
import Bags from "./Bags.json";
import Shoes from "./Shoes.json";
import { useNavigate,Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const ViewAllProducts = () => {
    navigate('../product', { replace: true });
    <Link to='../product'>add new product</Link>
  }
    return (
        <div>
         
          <img className="HomeImage1"src="https://www.outfittersstores.com/wp-content/uploads/2020/12/outfitters-store-blog-1.jpg" /> 
          
            <h2 style={{marginLeft:"20px"}}>View all T-shirts</h2>
               <div className="HomeImageDivMain">
                  {Tshirts.map((data, index) => {
                      return (
                        <div className='product-container'>
                            <img className="HomeImage3" src={data.img} onClick={ViewAllProducts}/>
                            <h5 style={{textAlign:"center"}}>{data.name}</h5>
                            <p style={{textAlign:"center"}}>{data.price}</p>
                          </div>
                      )
                  })}
              </div>

              <h2 style={{marginLeft:"20px"}}>View all Bags</h2>
               <div className="HomeImageDivMain">
                  {Bags.map((data, index) => {
                      return (
                        <div className='product-container'>
                            <img className="HomeImage3" src={data.img} onClick={ViewAllProducts}/>
                            <h5 style={{textAlign:"center"}}>{data.name}</h5>
                            <p style={{textAlign:"center"}}>{data.price}</p>
                          </div>
                      )
                  })}
              </div>

              <h2 style={{marginLeft:"20px"}}>View all shoes</h2>
               <div className="HomeImageDivMain">
                  {Shoes.map((data, index) => {
                      return (
                        <div className='product-container'>
                            <img className="HomeImage3" src={data.img} onClick={ViewAllProducts}/>
                            <h5 style={{textAlign:"center"}}>{data.name}</h5>
                            <p style={{textAlign:"center"}}>{data.price}</p>
                          </div>
                      )
                  })}
              </div>
        </div>
      );
}
export default Home;


// <div className="HomeImageDivMain">
//             <div className="product-container" style={{display:"flex"}}>
               
//                   <img className="HomeImage2" style={{marginRight: "150px",marginLeft:"30px"}} src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0094217998_1_1200x.jpg?v=1649668017" /> 
//                   <img className="HomeImage2" style={{marginRight: "150px"}} src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0084206901_2_1200x.jpg?v=1654066438"/>
//                   <img className="HomeImage2" src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0024212998_4_1200x.jpg?v=1646898684"/>
               
//             </div>  
//           </div>

{/* <div className="HomeImageDivMain">
{ProductsArray.map((data, index) => {
    return (
      <div className='product-container'>
          <img className="HomeImage3" src={data.img} onClick={ViewAllProducts}/>
          <h5>{data.name}</h5>
          <p>{data.price}</p>
        </div>
    )
 })}
</div> */}



{/* <Row>
{Tshirts.map((data, index) => {
          return (
                <div className="homediv" style={{width: "50%"}}>
                         <Col xs={12} sm={12} md={6} lg={4} style={{border: "2px solid red"}}>
                          <img className="HomeImage3" src={data.img} onClick={ViewAllProducts}/>
                          <h5 style={{textAlign:"center"}}>{data.name}</h5>
                          <p style={{textAlign:"center"}}>{data.price}</p>
                          </Col>
                 </div>   
          )
  })}
</Row> */}