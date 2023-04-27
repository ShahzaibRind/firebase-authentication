import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import InputC from "../commonComponents/InputC";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firbase";
import {signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  // Navigate to the Homepage
  const navigate = useNavigate();
  // To store the Input values
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  // Error Message State
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  // Handle Submission Function
  const HandleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill the all fields!");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };
  return (
    <div>
      <Container height={"100vh"} bg="blue.600" centerContent>
        <Box
          mt={"100px"}
          padding="4"
          bg="white"
          color="black"
          w={"400px"}
          borderRadius={"10px"}
        >
          <Heading fontSize={"20px"} pb={"10px"}>
            Login
          </Heading>

          <InputC
            mb={"20px"}
            type="email"
            label={"Email"}
            placeholder={"Enter your email"}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputC
            mb={"20px"}
            type="password"
            label={"Password"}
            placeholder={"Enter your Password"}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />

          <Text
            pb={"10px"}
            fontWeight={"600"}
            color={"red"}
            textAlign={"center"}
          >
            {errorMsg}
          </Text>
          <Button
            bg={"blue"}
            color={"white"}
            p={"10px"}
            w={"100%"}
            borderRadius={"50px"}
            onClick={HandleSubmission}
            disabled={submitButtonDisabled}
          >
            Login
          </Button>
          <Text pt={"20px"} textAlign={"center"}>
            Don't Have an Account?
            <span style={{ textDecoration: "underline", color: "blue" }}>
              {" "}
              <Link to={"/signup"}>Signup</Link>
            </span>
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
