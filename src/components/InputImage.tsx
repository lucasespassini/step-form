import {
  Avatar,
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type InputImageProps = {
  id: string;
  validation?: RegisterOptions;
};

export const InputImage = ({
  id,
  isDisabled,
  validation,

  ...rest
}: InputImageProps & InputProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const image = watch(id);

  return (
    <FormControl
      display="flex"
      justifyContent="center"
      color="#fff"
      isDisabled={isDisabled}
      isInvalid={!!errors[id]}
    >
      <Box as="label" htmlFor={id} borderRadius="50%" cursor="pointer">
        <Avatar
          size="xl"
          src={image?.length ? URL.createObjectURL(image[0]) : ""}
          bgColor="#A0AEC0"
        />
      </Box>

      <Input
        type="file"
        aria-describedby={id}
        id={id}
        size="sm"
        display="none"
        accept="image/png, image/jpg, image/jpeg"
        {...register(id, {
          ...validation,
          onChange: (e) => URL.createObjectURL(e.target.files[0]),
        })}
        {...rest}
      />
      <FormErrorMessage>{errors[id]?.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
};
