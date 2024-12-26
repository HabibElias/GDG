import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `
             "nav nav" 
             "aside main" 
             "aside main" 
             `,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem hideBelow={`lg`} height={`100%`} area="aside" bg={`dodgerblue`}>
        Aside
      </GridItem>

      <GridItem area="main" bg={`coral`}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
