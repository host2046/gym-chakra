import { Card, CardBody, Text, Box, Heading, chakra } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}
const ChakraBox = chakra(motion.div);
const Benefit = ({ icon, title, description }: Props) => {
  return (
    <ChakraBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Card
        _hover={{
          transform: "scale(1.1)",
          transition: "transform .15s ease-in",
        }}
        marginTop={20}
        width="350px"
        height="350px"
        borderRadius={10}
        overflow="hidden"
      >
        <CardBody>
          <Box
            marginLeft={32}
            marginBottom={6}
            borderRadius={25}
            bg="pink.500"
            boxSize={12}
          >
            <Box boxSize={8} margin={2} paddingTop={1.5}>
              {icon}
            </Box>
          </Box>
          <Heading color="pink.900" as="h6" size="lg">
            {title}
          </Heading>
          <Text marginBottom={3}>{description}</Text>
          <Link to="/contactus">
            <Text
              textAlign="center"
              color="orange"
              _hover={{ color: "yellow", fontFamily: "bold" }}
            >
              Learn More
            </Text>
          </Link>
        </CardBody>
      </Card>
    </ChakraBox>
  );
};

export default Benefit;
