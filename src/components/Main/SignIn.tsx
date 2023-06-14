import { Box, Flex, InputGroup, Input, Button } from "@chakra-ui/react";
import { FormEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const sumbitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredemail = emailRef.current!.value;
    const enteredPass = passRef.current!.value;
    const fromIsValid =
      enteredemail.includes("@") && enteredPass.trim().length > 6;
    if (!fromIsValid) {
      alert("please entere valid inputs");
    } else {
      navigate("/benefits");
    }
  };
  return (
    <Flex marginTop={5} align="center" justify="center" h="400px">
      <Box p={6} rounded="md" w="30%">
        <form onSubmit={sumbitHandler}>
          <InputGroup marginY={2}>
            <Input ref={emailRef} placeholder="Email" borderRadius={20} />
          </InputGroup>
          <InputGroup marginY={2}>
            <Input ref={passRef} placeholder="Password" borderRadius={20} />
          </InputGroup>
          <Button
            marginTop={2}
            paddingX={5}
            borderRadius={20}
            _hover={{ color: "green", bg: "orange" }}
            colorScheme="yellow"
            type="submit"
          >
            SIGN IN
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default SignIn;
