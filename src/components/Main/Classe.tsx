import { Card, CardBody, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface Props {
  name: string;
  image: string;
  descripton?: string;
}

const Classe = ({ name, image, descripton }: Props) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.1)",
        transition: "transform .15s ease-in",
      }}
      width="350px"
      borderRadius={10}
      overflow="hidden"
    >
      <Image src={image} />
      <CardBody>
        <Link to="/contactus">
          <Heading>{name}</Heading>
        </Link>
        <Text>{descripton}</Text>
      </CardBody>
    </Card>
  );
};

export default Classe;
