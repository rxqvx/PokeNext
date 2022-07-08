import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import { Text } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <Text
        as="main"
        minHeight="70vh"
        className="main-container"
      >
        {children}
      </Text>
      <Footer />
    </>
  );
};

export default Layout;
