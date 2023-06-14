import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import ExpendableText from "../../UI/ExpandableText";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { ClassesType } from "../../type";
import Classe from "./Classe";

const Dummy_Image: ClassesType[] = [
  {
    id: "c1",
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus voluptates eligendi asperiores numquam adipisci corporis! Fugit adipisci ex quam?",
    image: image1,
  },
  {
    id: "c2",
    name: "Fitness Training Classes",

    image: image2,
  },
  {
    id: "c3",
    name: "Advanture Training Classes",

    image: image3,
  },
  {
    id: "c4",
    name: "Ab Core Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus voluptates eligendi asperiores numquam adipisci corporis! Fugit adipisci ex quam?",
    image: image4,
  },
  {
    id: "c5",
    name: "Yoga Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus voluptates eligendi asperiores numquam adipisci corporis! Fugit adipisci ex quam?",
    image: image5,
  },
  {
    id: "c6",
    name: "abs Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus voluptates eligendi asperiores numquam adipisci corporis! Fugit adipisci ex quam?",
    image: image6,
  },
];

const OurClasses = () => {
  return (
    <>
      <Heading marginY={5} color="pink.600">
        OUR CLASSES
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
      <SimpleGrid marginTop={5} columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {Dummy_Image.map((i) => (
          <Classe
            key={i.id}
            name={i.name}
            descripton={i.description}
            image={i.image}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default OurClasses;
