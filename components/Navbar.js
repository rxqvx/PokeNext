import Link from "next/link";
import { Image, Button, Flex, Text, Input, List, ListItem, IconButton, Divider } from '@chakra-ui/react'
import { SearchBarContext } from '../contexts/SearchBarContext'
import React, { useContext } from "react";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { handleChange, handleSearch, Clear, digitado } = useContext(SearchBarContext);

  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      padding="1em 1.2em"
      marginBottom="2em"
      backgroundColor="#333"
      color="#fff"
      width={["200vw", "auto"]}
    >
      <Link href="/" >
        <a onClick={Clear}>
          <Flex
            justifyContent="center"
            align-items="center"
            background="transparent !important"
            transition="all .2s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
            }}
          > {/* styles.logo */}
            <Image
              src="/images/pokeball.png"
              alt="pokeball"
              margin={[5, 'initial']}
            />
            <Text as="h1" marginLeft={[0, ".5em"]} display={['none', 'none', 'initial', 'initial']} alignSelf={['initial', 'center']}>PokeNext</Text>
          </Flex>
        </a >
      </Link >
      <Flex flexDir={['column', 'initial']} gap={4} margin={[5, 'initial']} >
        <Text
          fontSize={['xl', 'initial']}
          fontFamily='helvetica'
          alignSelf={['flex-start', 'center']}
        >Pesquise pelo Pokemon:</Text>
        <Flex gap={4}>
          <Input value={digitado} focusBorderColor="#E33D33" onChange={(e) => handleChange(e.target.value)} size={'md'} width={['90vw', "auto"]} color="tomato" placeholder="ex.:Pikachu" _placeholder={{ opacity: 0.4, color: 'inherit' }} />
          <Link href="/"><Button marginX={[5, 'initial']} onClick={(handleSearch)} colorScheme='red' variant='outline'>Buscar</Button></Link>
        </Flex>
      </Flex>

      <IconButton
        aria-label="Open Menu"
        size="lg"
        icon={isOpen ? (
          <CloseIcon />
        ) : (
          <HamburgerIcon />
        )}
        display={['flex', 'flex', 'none', 'none']}
        marginX={1}
        colorScheme="red"
        onClick={() => setIsOpen(!isOpen)}
        alignSelf="center"
        style={{ position: isOpen ? 'fixed' : 'relative', marginLeft: isOpen ? '37em' : 'initial', marginBottom: isOpen ? '4em' : 'initial' }}
        flexDirection='column'
        justifyContent='space-around'
        zIndex={11}
      />
      {isOpen ?
        <Flex
          flexDir="column"
          justifyContent='flex-start'
          background='#fff'
          height='100vh'
          textAlign='left'
          padding='2rem'
          position='fixed'
          top={0}
          right={0}
          transition='transform 0.3s ease-in-out'
          width='250px'
          zIndex='10'
        >
          <Flex mt={10} justifyContent="start" gridGap="4" flexDirection="column">
            <Divider orientation="horizontal" />
            <Text color="#000">olamundokk</Text>
            <Text color="#000">olamundokk</Text>
            <Text color="#000">olamundokk</Text>
            <Text color="#000">olamundokk</Text>
          </Flex>
        </Flex>
        :
        null
      }
      <List
        display={['none', 'none', 'flex', 'flex']}
        listStyle="none"
      >{/*{styles.link_items}*/}
        <ListItem onClick={Clear} marginRight="1.3em">
          <Text
            as="a"
            href="/"
            color="#fff"
            textDecoration='none'
            padding="5px"
            transition=".4s"
            borderBottom="2px solid transparent"
            _hover={{ borderColor: "#fff" }}
          >Home</Text>
        </ListItem>
        <ListItem onClick={Clear}>
          <Text
            as="a"
            color="#fff"
            textDecoration='none'
            padding="5px"
            transition=".4s"
            borderBottom="2px solid transparent"
            href="/about"
            _hover={{ borderColor: "#fff" }}
          >About</Text>
        </ListItem>
      </List>
    </Flex >
  );
};

export default Navbar;
