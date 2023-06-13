import { Grid, GridItem } from "@chakra-ui/react";
import Home from "../components/Main/Home";
const HomePage = () => {
  return (
    <Grid templateAreas={` "main main"`}>
      <GridItem area="main">
        <Home />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
