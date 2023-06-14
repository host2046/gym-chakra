import { HStack, Image, Button, Grid, GridItem } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import Navpages from "./Navpages";

const Navbar = () => {
  return (
    <Grid templateAreas={`"nav nav"`}>
      <GridItem area="nav">
        <HStack margin="10px" justifyContent="space-between">
          <Image src={Logo} />
          <Navpages />
          <Link to="/signin">
            <Button>SGIN IN</Button>
          </Link>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Navbar;
