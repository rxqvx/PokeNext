import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Navbar.module.css'
import { Button, Flex, Text } from '@chakra-ui/react'
// import { Input } from 'antd'
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
        {/* erro no build no input do chakraui<Input value={pokemon} focusBorderColor="#E33D33" onChange={(e: any) => handleChange(e.target.value)} size='md' width="auto" color="tomato" placeholder="ex.:Pikachu" _placeholder={{ opacity: 0.4, color: 'inherit' }} /> */}
        {/* erro no build no input do antd <Input placeholder="pikachu" onChange={(e: any) => handleChange(e.target.value)} value={pokemon} onPressEnter={handleSearch} /> */}
        <input onChange={(e: any) => handleChange(e.target.value)} placeholder="pikachu" className={styles.input} />
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
