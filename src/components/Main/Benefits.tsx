import {
  Heading,
  SimpleGrid,
  Box,
  Image,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import ExpendableText from "../../UI/ExpandableText";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import { Link } from "react-router-dom";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Benefitstype } from "../../type";
import Benefit from "./Benefit";
import Sparkles from "../../assets/Sparkles.png";
import GymAnimate from "./GymAnimate";
const benefits: Benefitstype[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "start of the art facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100% of diversity people ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Export And pro trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, provident.",
  },
];
const Benefits = () => {
  return (
    <>
      <Heading marginY={5} color="pink.600">
        MORE THAN JUST A GYM
      </Heading>
      <ExpendableText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempore
        laudantium quibusdam dicta eveniet labore voluptatum tenetur optio
        consequuntur veniam, aliquid, dolorem magnam deleniti nesciunt
        aspernatur quas maxime, debitis ratione assumenda ipsam excepturi odio
        qui nam. Provident voluptatibus architecto ad distinctio beatae modi,
        aliquam necessitatibus ipsa rem sint quod sit, nam sequi cupiditate
        explicabo consequatur, minima eligendi doloribus incidunt deleniti
        pariatur quas! Fugiat commodi non, recusandae cupiditate et quis sequi
        pariatur earum illo debitis accusamus sapiente architecto perspiciatis
        deleniti distinctio doloremque velit! Culpa voluptatem mollitia
        praesentium? Eos fuga unde possimus, vel impedit quod nostrum,
        laboriosam quibusdam sunt labore provident quas?
      </ExpendableText>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {benefits.map((b) => (
          <Benefit
            key={b.title}
            title={b.title}
            icon={b.icon}
            description={b.description}
          />
        ))}
      </SimpleGrid>
      <GymAnimate />
      <SimpleGrid marginTop={10} columns={{ base: 1, md: 2 }}>
        <Box>
          <Image src={BenefitsPageGraphic} />
        </Box>
        <Box>
          <Heading marginTop={5} color="pink.600">
            MILIONS OF HAPPY MEMEBERS GETTING{" "}
            <span style={{ color: "purple" }}>FIT</span>
          </Heading>
          <Text marginY={8}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            facilis sunt vitae iure molestias fuga nisi, praesentium
            perspiciatis alias, possimus illum quibusdam laudantium illo.
            Tempore qui nam eligendi cumque labore nulla illo, sunt
            perspiciatis, voluptates eos, id harum quibusdam! At?
          </Text>
          <Text marginBottom={8}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            facilis sunt vitae iure molestias fuga nisi, praesentium
            perspiciatis alias, possimus illum quibusdam laudantium illo.
            Tempore qui nam eligendi cumque labore nulla illo, sunt
            perspiciatis, voluptates eos, id harum quibusdam! At?
          </Text>
          <HStack>
            <Button
              _hover={{ color: "green", bg: "orange" }}
              colorScheme="yellow"
              marginY={3}
            >
              <Link to="/contactus">JOIN NOW</Link>
            </Button>
            <Image paddingLeft={4} src={Sparkles} />
          </HStack>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Benefits;
