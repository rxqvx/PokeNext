import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { SearchBarContext } from '../contexts/SearchBarContext'
import { useContext } from "react";


const Navbar = () => {

  const { handleChange, handleSearch, pokemon } = useContext(SearchBarContext);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokeball.png"
          alt="pokeball"
          width={30}
          height={30}
        />
        <h1>PokeNext</h1>
      </div>
      <Flex gap={4}>
        <Text fontSize='lg' alignSelf="center" fontFamily='sans-serif'>Pesquise pelo Pokemon:</Text>
        <Input value={pokemon} focusBorderColor="#E33D33" onChange={(e: any) => handleChange(e.target.value)} size='md' width="auto" />
        <Button onClick={handleSearch} colorScheme='red' variant='outline'>Buscar</Button>
      </Flex>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
