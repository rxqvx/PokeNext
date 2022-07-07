import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css'
import { Button, Flex, Text, Input } from '@chakra-ui/react'
import { SearchBarContext } from '../contexts/SearchBarContext'
import { useContext } from "react";


const Navbar = () => {

  const { handleChange, handleSearch, pokemon, Clear, digitado } = useContext(SearchBarContext);

  return (
    <div className={styles.navbar}>
      <Link href="/" >
        <a onClick={Clear}>
          <div className={styles.logo}>
            <Image
              src="/images/pokeball.png"
              alt="pokeball"
              width={30}
              height={30}
            />
            <h1>PokeNext</h1>
          </div>
        </a >
      </Link >
      <Flex gap={4}>
        <Text fontSize='lg' alignSelf="center" fontFamily='sans-serif'>Pesquise pelo Pokemon:</Text>
        <Input value={digitado} focusBorderColor="#E33D33" onChange={(e) => handleChange(e.target.value)} size='md' width="auto" color="tomato" placeholder="ex.:Pikachu" _placeholder={{ opacity: 0.4, color: 'inherit' }} />
        <Link href="/"><Button onClick={(handleSearch)} colorScheme='red' variant='outline'>Buscar</Button></Link>
      </Flex>
      <ul className={styles.link_items}>
        <li onClick={Clear}>
          <Link href="/" >
            <a>Home</a>
          </Link>
        </li>
        <li onClick={Clear}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div >
  );
};

export default Navbar;
