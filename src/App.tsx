import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area="nav" bg="gold">
        Nav
      </GridItem>
      <GridItem area="main" bg="red">
        Nav
      </GridItem>
    </Grid>
  );
};

export default App;
