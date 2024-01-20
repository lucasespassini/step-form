import {
  Avatar,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useFormStore } from "../stores/useFormStore";

export const Home = () => {
  const { user } = useFormStore();

  return (
    <Flex flexDir="column" gap={5}>
      {user && (
        <Card w="100%" border="1px solid #e7e7e7" bgColor="#000">
          <CardBody>
            <Flex>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name={`${user.nome} ${user.sobrenome}`}
                  src={
                    user.foto_usuario?.length
                      ? URL.createObjectURL(user.foto_usuario[0])
                      : ""
                  }
                />

                <Box color="#fff">
                  <Heading size="sm">
                    {user.nome} {user.sobrenome}
                  </Heading>
                  <Text>{user.email} </Text>
                  <Text>{user.celular} </Text>
                </Box>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      )}

      <Link to="/step1">ir para o formulario</Link>
    </Flex>
  );
};
