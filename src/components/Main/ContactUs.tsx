import { Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import ContactForm from "./ContactForm";
import HText from "../../UI/HText";
const ContactUs = () => {
  return (
    <>
      <HText>
        <span style={{ color: "purple" }}>JOIN NOW</span> TO GET IN SHAPE
      </HText>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
        similique velit, quaerat delectus expedita quis eveniet laudantium,
        aspernatur nostrum sunt quibusdam inventore voluptatum tempore! Et
        cupiditate minima quis facilis omnis quam ipsum odio eos facere quidem
        dolorem, consectetur, repellat officia. Molestiae numquam praesentium,
        quo ipsam suscipit ea deleniti. Non, quas.
      </Text>
      <SimpleGrid spacing={3} columns={{ base: 1, md: 2 }}>
        <ContactForm />
        <Image src={ContactUsPageGraphic} />
      </SimpleGrid>
    </>
  );
};

export default ContactUs;
