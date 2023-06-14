import { Heading, Text } from "@chakra-ui/react";
import SignIn from "./SignIn";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <>
      <Heading marginY={5} color="pink.600">
        <span style={{ color: "purple" }}>JOIN NOW</span> TO GET IN SHAPE
      </Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
        similique velit, quaerat delectus expedita quis eveniet laudantium,
        aspernatur nostrum sunt quibusdam inventore voluptatum tempore! Et
        cupiditate minima quis facilis omnis quam ipsum odio eos facere quidem
        dolorem, consectetur, repellat officia. Molestiae numquam praesentium,
        quo ipsam suscipit ea deleniti. Non, quas.
      </Text>
      <ContactForm />
    </>
  );
};

export default ContactUs;
