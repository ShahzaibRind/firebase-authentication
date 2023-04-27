import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import LoginPlease from "../LoginPlease";

const Home = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        <Alert status="success" variant="subtle">
          <AlertIcon />
          Logout Successfully!
        </Alert>;
        console.log("Signout Successfully...");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <HStack p={"20px"} alignItems={"center"}>
        <Heading>Logo</Heading>
        <Spacer />
        
        <Button
          bg={"blue"}
          color={"white"}
          p={"10px"}
          w={"10%"}
          borderRadius={"50px"}
        >
          <Link to={"/login"}>Login</Link>
        </Button>
        <Button
          bg={"green"}
          color={"white"}
          p={"10px"}
          w={"10%"}
          borderRadius={"50px"}
        >
          <Link to={"/signup"}>Signup</Link>
        </Button>
      </HStack>
      <Center fontWeight={"bold"}>
        <h2>
          {props.name
            ? `Successfully Logged in, Welcome - ${props.name}`
            : "You have not loggedin, Please Login"}
        </h2>
      </Center>

      {user ? (
        <Box mt={"10px"} textAlign={"center"}>
          <Button
            bg={"red"}
            color={"white"}
            p={"10px"}
            w={"10%"}
            borderRadius={"50px"}
            onClick={handleLogout}
          >
            Logout
          </Button>
          <Link to='/dashboard' >
        <Text fontWeight={'bold'} textDecoration={'underline'} color={'blue'} pt={'20px'}>Go to Dashboard</Text>
        </Link>
        </Box>
      ) : (
        <Box mt={"10px"} textAlign={"center"}>
        <Button
          bg={"blue"}
          color={"white"}
          p={"10px"}
          w={"10%"}
          borderRadius={"50px"}
        >
          <Link to={"/login"}>Login</Link>
        </Button>
        <LoginPlease />
        </Box>
      )}
    </div>
  );
};

export default Home;
