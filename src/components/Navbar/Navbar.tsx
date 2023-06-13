import { HStack, Image, Box } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import ColorModeSwitch from "./ColorSwitchMode";

import Navpages from "./Navpages";

const Navbar = () => {
  return (
    <HStack margin="10px" justifyContent="space-between">
      <Image src={Logo} />
      <Navpages />

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
