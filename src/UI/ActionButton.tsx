import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return (
    <Button
      marginTop={2}
      paddingX={5}
      borderRadius={20}
      _hover={{ color: "green", bg: "orange" }}
      colorScheme="yellow"
      type="submit"
    >
      {children}
    </Button>
  );
};

export default ActionButton;
