import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { useContext } from 'react'
import { SearchBarContext } from '../contexts/SearchBarContext'
import { Image, Flex, Text } from '@chakra-ui/react'

export async function getStaticProps() {

  const maxPokemons = 250
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  const resultados = data.results

  return {
    props: {
      pokemons: resultados,
    },
  }
}

export default function Home({ pokemons }) {
  const { busca } = useContext(SearchBarContext)

  const handleList = (busca) => {
    if (!busca || busca === '') {
      console.log("busca false", busca)
      return (
        <>
          {pokemons.map((pokemon) => (// como jsx considera como um objeto então tem que ser parentesis ao invés de chaves como normalmente
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </>
      );
    } else if (busca) {
      console.log("busca true", busca)
      // { pokemons.map((pokemon) => console.log(pokemon.name)) }
      const pokemonsFiltered = pokemons.filter((pokemon) => (pokemon.name).startsWith(busca))
      return (
        <>
          {pokemonsFiltered.map((pokemon) => (// como jsx considera como um objeto então tem que ser parentesis ao invés de chaves como normalmente
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </>
      );
    }

  }



  return (<>
    <section id="home" >
      <Flex
        justifyContent='center'
        alignItems='center'
        marginBottom='2em'
      >
        {/* title_container */}
        <Text
          as="h1"
          color='#e33d33'
          textAlign='center'
          fontSize='3em'
          paddingLeft='5px'
          marginRight='.4em'
          backgroundColor='#e9e9e9'
          borderRadius='0.5rem'
          display={['none', 'none', 'initial', 'initial']}
        >Poke
          <Text
            as="span"
            color='#f4f4f4'
            backgroundColor='#e33d33'
            border='solid 1px #e9e9e9'
            borderRadius='0.5rem'
            padding='8px'
            margin='5px'
          >
            Next
          </Text>
        </Text>
        <Image src="/images/pokeball.png" width="50" height="50" alt="PokeNextBall" display={['none', 'none', 'initial', 'initial']} />
      </Flex>
      <Flex
        flexWrap='wrap'
        justifyContent='space-between'
        alignItems='center'
        maxWidth={['400px', '1100px']}
        margin='0 auto'
        gap={['initial', 4]}
      >
        {/* pokemonContainer */}
        {handleList(busca)}
      </Flex>
    </section>

  </>)
}
