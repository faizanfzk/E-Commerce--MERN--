import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box pb={"120px"} >
      <Box
        w="100%"
        display={"flex"}
        justifyContent="space-around"
        position={"fixed"}
        backgroundColor="lightgrey"
      >
        <Box>
          <NavLink to="/">
            <h1 style={{   width:"250px",fontSize:"30px",
              paddingRight:"80px", paddingTop:"34px",fontWeight:"bold",color:"rgb(0,25,105)"}}
           
         >  FZK MART</h1>
           
          </NavLink>
        </Box>
        <Box display={"flex"} justifyContent="space-evenly">
          <Box pt="30px">
            <NavLink
              to="/products"
              style={{
                textDecoration: "none",
                color:"black",
                paddingRight: "35px",
                paddingTop: "30px",
              }}
            >
         Products
            </NavLink>
          </Box>
          <Box pt="30px">
            <NavLink
              to="/cart"
              style={{
                textDecoration: "none",
                color:"black",
                paddingRight: "35px",
                paddingTop: "30px",
              }}
            >
            Cart
            </NavLink>
          </Box>
          {/* <Box pt="30px">
            <NavLink
              to="/casestudies"
              style={{
                textDecoration: "none",
                color:"black",
                paddingRight: "35px",
                paddingTop: "30px",
              }}
            >
              Case studies
            </NavLink>
          </Box>
          <Box pt="30px">
            <NavLink
              to=""
              style={{
                textDecoration: "none",
                color:"black",
                paddingRight: "35px",
                paddingTop: "30px",
              }}
            >
              Learn
            </NavLink>
          </Box> */}

          <Box pt="30px" pr={"30px"} style={{}}>
            <NavLink
              to="/login"
              style={{
                border: "1px solid rgb(0,25,105) ",
                padding: "15px",
                color: "rgb(0,25,105)",
                borderRadius: "50px",
                width: "100px",
                textDecoration: "none",
              }}
              _hover={{
                backgroundColor:"rgb(88,70,246) ",
                color:"white"
              }}
            >
              Login
            </NavLink>
          </Box>
          <Box pt="30px">
            <NavLink
              to="/signup"
              style={{
                backgroundColor: "rgb(0,25,105)",
                padding: "15px",
                color: "white",
                borderRadius: "50px",
                width: "100px",
                textDecoration: "none",
              }}
            >
              Sign up
            </NavLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};