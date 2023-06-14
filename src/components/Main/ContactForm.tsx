import { Flex, Box, InputGroup, Input, Button, Text } from "@chakra-ui/react";
import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredName = nameRef.current!.value;
    const enteredemail = emailRef.current!.value;
    const enteredMessage = messageRef.current!.value;

    if (
      enteredName.trim().length === 0 ||
      !enteredemail.includes("@") ||
      enteredMessage.trim().length < 10
    ) {
      setIsValid(false);
      return;
    }

    navigate("/");
  };
  return (
    <Flex marginTop={5} bg="gray.200" align="center" justify="center" h="400px">
      <Box bg="gray.300" p={6} rounded="md" w="30%">
        <form onSubmit={submitHandler}>
          <InputGroup borderColor="gray.700" marginY={2}>
            <Input ref={nameRef} placeholder="Name" borderRadius={20} />
          </InputGroup>
          <InputGroup borderColor="gray.700" marginBottom={2}>
            <Input ref={emailRef} placeholder="Email" borderRadius={20} />
          </InputGroup>
          <InputGroup borderColor="gray.700" marginBottom={2}>
            <Input
              ref={messageRef}
              as="textarea"
              height={20}
              placeholder="Message"
              borderRadius={20}
            />
          </InputGroup>
          {!isValid && <Text color="red">please complete the form</Text>}
          <Button
            _hover={{ color: "green", bg: "orange" }}
            colorScheme="yellow"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default ContactForm;
