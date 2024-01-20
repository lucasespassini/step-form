import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useFormStore } from "../stores/useFormStore";
import { Step1Form } from "../types/formTypes";

export const Step1 = () => {
  const navigate = useNavigate();

  const { step1, setData } = useFormStore();

  const methods = useForm<Step1Form>({ defaultValues: step1 || {} });
  const { handleSubmit } = methods;

  const onSubmitStep1 = useCallback(
    (data: Step1Form) => {
      setData({ step: 1, data });
      navigate("/step2");
    },
    [navigate, setData]
  );

  return (
    <FormProvider {...methods}>
      <Heading mt={-5}>Etapa 1</Heading>

      <Card
        as="form"
        w="100%"
        border="1px solid #e7e7e7"
        bgColor="#000"
        onSubmit={handleSubmit(onSubmitStep1)}
      >
        <CardHeader>
          <Heading size="md" color="#fff">
            Informações básicas
          </Heading>
        </CardHeader>

        <CardBody display="flex" flexDir="column" gap={3}>
          <Input
            id="nome"
            label="nome"
            validation={{ required: "nome é obrigatório" }}
          />
          <Input
            id="sobrenome"
            label="sobrenome"
            validation={{ required: "sobrenome é obrigatório" }}
          />
        </CardBody>

        <CardFooter justifyContent="space-between">
          <Button onClick={() => navigate(-1)}>Voltar</Button>
          <Button type="submit">Próxima etapa</Button>
        </CardFooter>
      </Card>
    </FormProvider>
  );
};
