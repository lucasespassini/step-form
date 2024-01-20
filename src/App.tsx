import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { LayoutProvider } from "./contexts/LayoutProvider";
import { AppRoutes } from "./router/AppRoutes";

const theme = extendTheme({
  styles: {
    global: {
      html: { minHeight: "100vh" },
      body: { minHeight: "100vh", backgroundColor: "#000" },
    },
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <LayoutProvider>
          <AppRoutes />
        </LayoutProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};
