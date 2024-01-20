import { Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { InputImage } from "../components/InputImage";
import { useFormStore } from "../stores/useFormStore";
import { User } from "../types/formTypes";

export const Recap = () => {
  const navigate = useNavigate();
  const { step1, step2, step3, setUser } = useFormStore();

  const methods = useForm<User>({
    defaultValues: { ...step1, ...step2, ...step3 },
  });
  const { handleSubmit } = methods;

  const onSubmit = useCallback(
    (data: User) => {
      setUser(data);
      navigate("/");
    },
    [navigate, setUser]
  );

  return (
    <FormProvider {...methods}>
      <Flex
        as="form"
        w="100%"
        flexDir="column"
        gap={3}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading size="md">{step1?.nome}, os dados estão corretos?</Heading>

        <Card border="1px solid #e7e7e7" bgColor="#000">
          <CardHeader>
            <Heading size="md" color="#fff">
              Etapa 1
            </Heading>
          </CardHeader>

          <CardBody display="flex" flexDir="column" gap={3}>
            <Input
              id="nome"
              label="nome"
              isReadOnly
              defaultValue={step1?.nome}
            />
            <Input
              id="sobrenome"
              label="sobrenome"
              isReadOnly
              defaultValue={step1?.sobrenome}
            />
          </CardBody>
        </Card>

        <Card border="1px solid #e7e7e7" bgColor="#000">
          <CardHeader>
            <Heading size="md" color="#fff">
              Etapa 2
            </Heading>
          </CardHeader>

          <CardBody display="flex" flexDir="column" gap={3}>
            <Input
              id="email"
              label="email"
              isReadOnly
              defaultValue={step2?.email}
            />
            <Input
              id="celular"
              label="celular"
              isReadOnly
              defaultValue={step2?.celular}
            />
          </CardBody>
        </Card>

        <Card border="1px solid #e7e7e7" bgColor="#000">
          <CardHeader>
            <Heading size="md" color="#fff">
              Etapa 3
            </Heading>
          </CardHeader>

          <CardBody
            display="flex"
            justifyContent="center"
            flexDir="column"
            gap={3}
          >
            <InputImage id="foto_usuario" isDisabled />
          </CardBody>
        </Card>

        <Flex justifyContent="space-between">
          <Button onClick={() => navigate(-1)}>Voltar</Button>
          <Button type="submit">Confirmar</Button>
        </Flex>
      </Flex>
    </FormProvider>
  );
};
