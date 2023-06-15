import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <Heading marginY={5} color="pink.600">
      {children}
    </Heading>
  );
};

export default HText;
