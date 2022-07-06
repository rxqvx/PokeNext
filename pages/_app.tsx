import "../styles/globals.css";
import Layout from "../components/Layout";
import { ChakraProvider } from '@chakra-ui/react'
import { SearchBarContextProvider } from "../contexts/SearchBarContext";

function MyApp({ Component, pageProps }) {
  return (
    <SearchBarContextProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SearchBarContextProvider>

  );
}

export default MyApp;
