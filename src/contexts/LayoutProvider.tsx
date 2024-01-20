import { Container } from "@chakra-ui/react";

type LayoutProviderProps = {
  children: JSX.Element;
};

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <Container
      w="100%"
      minH="100vh"
      py={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      gap={3}
      color="#fff"
    >
      {children}
    </Container>
  );
};
