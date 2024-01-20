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
import { Step2Form } from "../types/formTypes";

export const Step2 = () => {
  const navigate = useNavigate();

  const { step2, setData } = useFormStore();

  const methods = useForm<Step2Form>({ defaultValues: step2 || {} });
  const { handleSubmit } = methods;

  const onSubmitStep2 = useCallback(
    (data: Step2Form) => {
      setData({ step: 2, data });
      navigate("/step3");
    },
    [navigate, setData]
  );

  return (
    <FormProvider {...methods}>
      <Heading mt={-5}>Etapa 2</Heading>

      <Card
        as="form"
        w="100%"
        border="1px solid #e7e7e7"
        bgColor="#000"
        onSubmit={handleSubmit(onSubmitStep2)}
      >
        <CardHeader>
          <Heading size="md" color="#fff">
            Informações adicionais
          </Heading>
        </CardHeader>

        <CardBody display="flex" flexDir="column" gap={3}>
          <Input
            id="email"
            label="email"
            validation={{ required: "email é obrigatório" }}
          />
          <Input
            id="celular"
            label="celular"
            validation={{ required: "celular é obrigatório" }}
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
