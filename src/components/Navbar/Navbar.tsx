import {
  HStack,
  Image,
  Button,
  Flex,
  useBreakpointValue,
  Box,
  IconButton,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";

import Navpages from "./Navpages";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="bg.surface" boxShadow="sm">
        <HStack margin="10px" justifyContent="space-between">
          <Image src={Logo} />
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              <Navpages />
              <Link to="/signin">
                <Button>SGIN IN</Button>
              </Link>
            </Flex>
          ) : !isToggled ? (
            <IconButton
              onClick={() => setIsToggled(!isToggled)}
              variant="tertiary"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            />
          ) : (
            <SimpleGrid>
              <Box textAlign="center" width="100px" height="200px" bg="white">
                <Button marginLeft={10} boxSize="25px">
                  <XMarkIcon
                    color="black"
                    onClick={() => setIsToggled(!isToggled)}
                  />
                </Button>
                <Button
                  marginBottom={3}
                  _hover={{ color: "pink.500" }}
                  variant="link"
                >
                  <Link to="/">Home</Link>
                </Button>
                <Button
                  marginBottom={3}
                  _hover={{ color: "pink.500" }}
                  variant="link"
                >
                  <Link to="/contactus">ContactUs</Link>
                </Button>
                <Button
                  marginBottom={3}
                  _hover={{ color: "pink.500" }}
                  variant="link"
                >
                  <Link to="/benefits">Benefits</Link>
                </Button>
                <Button
                  marginBottom={3}
                  _hover={{ color: "pink.500" }}
                  variant="link"
                >
                  <Link to="/ourclasses">OurClasses</Link>
                </Button>
              </Box>
            </SimpleGrid>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
