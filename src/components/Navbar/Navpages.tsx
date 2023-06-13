import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navpages = () => {
  return (
    <HStack justifyContent="space-between">
      <Button variant="link">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="link">
        <Link to="/contactus">ContactUs</Link>
      </Button>
      <Button variant="link">
        <Link to="/benefits">Benefits</Link>
      </Button>
      <Button variant="link">
        <Link to="/ourclasses">OurClasses</Link>
      </Button>
    </HStack>
  );
};

export default Navpages;
