import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps as InputPropsRoot,
  Input as InputRoot,
} from "@chakra-ui/react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  validation?: RegisterOptions;
};

export const Input = ({
  label,
  id,
  isReadOnly,
  validation,
  ...rest
}: InputProps & InputPropsRoot) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl color="#fff" isReadOnly={isReadOnly} isInvalid={!!errors[id]}>
      <FormLabel>{label}</FormLabel>
      <InputRoot
        aria-describedby={id}
        size="sm"
        borderRadius="5px"
        autoComplete="on"
        {...register(id, validation)}
        {...rest}
      />
      <FormErrorMessage>{errors[id]?.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
};
