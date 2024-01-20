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
import { InputImage } from "../components/InputImage";
import { useFormStore } from "../stores/useFormStore";
import { Step3Form } from "../types/formTypes";

export const Step3 = () => {
  const navigate = useNavigate();

  const { step3, setData } = useFormStore();

  const methods = useForm<Step3Form>({ defaultValues: step3 || {} });
  const { handleSubmit } = methods;

  const onSubmitStep3 = useCallback(
    (data: Step3Form) => {
      setData({ step: 3, data });
      navigate("/recap");
    },
    [navigate, setData]
  );

  return (
    <FormProvider {...methods}>
      <Heading mt={-5}>Etapa 3</Heading>

      <Card
        as="form"
        w="100%"
        border="1px solid #e7e7e7"
        bgColor="#000"
        onSubmit={handleSubmit(onSubmitStep3)}
      >
        <CardHeader>
          <Heading size="md" color="#fff">
            Informações adicionais
          </Heading>
        </CardHeader>

        <CardBody
          display="flex"
          justifyContent="center"
          flexDir="column"
          gap={3}
        >
          <InputImage
            id="foto_usuario"
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
