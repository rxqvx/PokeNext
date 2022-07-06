import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/Card'
import { useContext } from 'react'
import { SearchBarContext } from '../contexts/SearchBarContext'



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
    if (!busca | busca === '') {
      return (
        <>
          {pokemons.map((pokemon) => (//jsx é considerado um objeto, por isso usamos parentesis ao invés de chaves como de costume
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </>
      );
    } else if (busca) {
      // { pokemons.map((pokemon) => console.log(pokemon.name)) }
      const pokemonsFiltered = pokemons.filter((pokemon) => (pokemon.name).startsWith(busca))
      return (
        <>
          {pokemonsFiltered.map((pokemon) => (//jsx é considerado um objeto, por isso usamos parentesis ao invés de chaves como de costume
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </>
      );
    }

  }



  return (<>
    <div>
      <div className={styles.title_container}>
        <h1>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width="50" height="50" alt="PokeNextBall" />
      </div>
      <div className={styles.pokemon_container}>
        {handleList(busca)}
      </div>
    </div>
  </>)
}
