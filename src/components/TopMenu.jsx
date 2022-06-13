import React,{useState} from "react";
import "./Product.css"
import userService from "./services/UserService";
import {Button} from '@mui/material';
import {useNavigate,Link} from "react-router-dom";

const TopMenu = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const navigate = useNavigate();
    
    const reloadNav = () => {
      navigate('./login', { replace: true });
      setIsNavExpanded(!isNavExpanded);
    };

    return (
        <nav className="navigation">
        <a href="/Home" className="brand-name">
          Outfitters
        </a>
        <button
          className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded); }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu" }>
          <ul className="TopMenuLinks">
            <li> 
              <Link to="/Home" onClick={() => {setIsNavExpanded(!isNavExpanded); }}>Home</Link>
            </li>
            <li> 
              <Link to="/contactus" onClick={() => {setIsNavExpanded(!isNavExpanded); }}>Contact</Link>
            </li>

           

            {!userService.isLoggedIn() ? 
            <>
              <li>
                 <Link to="/product" onClick={() => {setIsNavExpanded(!isNavExpanded); }}>Product</Link>
              </li>
              <li>
                <Link to="/login" onClick={reloadNav}>Login</Link>
              </li>
              <li> 
                <Link to="/register" onClick={reloadNav}>Register</Link>
              </li>
             

              </> 
               :(<>
                <li>
                    <Link to="/product" onClick={() => {setIsNavExpanded(!isNavExpanded); }}>Product</Link>
                  </li>
                  <li>
                    <Link to="/appatc" onClick={() => {setIsNavExpanded(!isNavExpanded); }}>ProductATC</Link>
                  </li>
                 
                  
                  <Button variant="contained" color="primary" onClick={e=>{userService.logout();
                    window.location.href = '/Home';
                  }}>Log out  {userService.getLoggedInUser().name } </Button>
                 </>
                 )} ;
          
          </ul>
        </div>
      </nav>
    )
}
export default TopMenu;




// import React from "react";
// import {Link} from "react-router-dom";
// import "./Product.css"
// import { AppBar, makeStyles, Toolbar, Typography } from "@mui/material";

// const TopMenu = () => {;
//     return (
//         <AppBar>
//             <Toolbar>
//                     <h1 className="ecommerce">E-commerce</h1>
//                     <Link to="/" className="link">
//                         Landing Page  
//                     </Link>
//                     <Link to="/contactus" className="link">
//                          Contact
//                     </Link>
//                     <Link to="/product/new" className="link">
//                         Add Product
//                     </Link>
//                     <Link to="/product" className="link">
//                         Product
//                     </Link>
//             </Toolbar>

//         </AppBar>
//     )
// }
// export default TopMenu;
