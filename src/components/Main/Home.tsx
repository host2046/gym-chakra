import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Button,
  HStack,
  chakra,
} from "@chakra-ui/react";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ChakraBox = chakra(motion.div);
const Home = () => {
  return (
    <>
      <SimpleGrid margin={5} columns={{ base: 1, md: 2 }}>
        <ChakraBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Image src={HomePageText} />
          <Text marginY={5}>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
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
        </ChakraBox>
        <Box>
          <Image src={HomePageGraphic} />
        </Box>
      </SimpleGrid>
      <HStack
        bg="pink.200"
        marginY={5}
        paddingY={5}
        justifyContent="space-around"
      >
        <Image src={SponsorRedBull} />
        <Image src={SponsorForbes} />
        <Image src={SponsorFortune} />
      </HStack>
    </>
  );
};

export default Home;
