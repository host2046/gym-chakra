import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navpages = () => {
  return (
    <HStack marginRight={3} justifyContent="space-between">
      <Button marginRight={3} _hover={{ color: "blue" }} variant="link">
        <Link to="/">Home</Link>
      </Button>
      <Button marginRight={3} _hover={{ color: "blue" }} variant="link">
        <Link to="/contactus">ContactUs</Link>
      </Button>
      <Button marginRight={3} _hover={{ color: "blue" }} variant="link">
        <Link to="/benefits">Benefits</Link>
      </Button>
      <Button marginRight={3} _hover={{ color: "blue" }} variant="link">
        <Link to="/ourclasses">OurClasses</Link>
      </Button>
    </HStack>
  );
};

export default Navpages;
