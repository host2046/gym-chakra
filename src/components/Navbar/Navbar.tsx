import {
  HStack,
  Image,
  Button,
  Flex,
  useBreakpointValue,
  Box,
  IconButton,
  Container,
} from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";

import Navpages from "./Navpages";

const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
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
          ) : (
            <IconButton
              variant="tertiary"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
            >
              <Link to="/">Home</Link>
            </IconButton>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
