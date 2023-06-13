import { SimpleGrid, Box, Image, Text, Button, HStack } from "@chakra-ui/react";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <SimpleGrid margin={5} columns={{ base: 1, md: 2 }}>
      <Box>
        <Image src={HomePageText} />
        <Text>
          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
          Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
          Now.
        </Text>
        <HStack>
          <Button
            marginRight={3}
            _hover={{ color: "green", bg: "orange" }}
            colorScheme="yellow"
            marginY={3}
          >
            <Link to="/contactus">JOIN NOW</Link>
          </Button>
          <Button
            _hover={{ color: "yellow", fontFamily: "bold" }}
            variant="link"
          >
            <Link to="/benefits">
              <Text>Learn More</Text>
            </Link>
          </Button>
        </HStack>
      </Box>
      <Box>
        <Image src={HomePageGraphic} />
      </Box>
    </SimpleGrid>
  );
};

export default Home;
