import {
  ButtonProps as ButtonPropsRoot,
  Button as ButtonRoot,
} from "@chakra-ui/react";

export const Button = ({ children, ...rest }: ButtonPropsRoot) => {
  return (
    <ButtonRoot
      size="sm"
      color="#000"
      bgColor="#e7e7e7"
      border="1px solid"
      _hover={{ color: "#e7e7e7", backgroundColor: "#000" }}
      {...rest}
    >
      {children}
    </ButtonRoot>
  );
};
