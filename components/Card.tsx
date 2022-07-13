import { Image, Flex, Text } from "@chakra-ui/react";

const Card = ({ pokemon }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding="2em 1em"
      marginBottom="2em"
      width={["40%", "23%"]}
      borderRadius="1em"
      border="2px solid #E33D33"
      boxShadow="5px 5px 12px rgba(0, 0, 0, 0.5)"
      color="#fff"
      backgroundColor="#333"
      margin={[2, 2, 10, "initial"]}
    >
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <Text
        as="p"
        margin="1em 0"
        backgroundColor="#e33d33"
        borderRadius="5px"
        padding="5px"
        color="#fff"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        #{pokemon.id}
      </Text>
      <Text
        as="h3"
        textTransform="capitalize"
        marginBottom="1em"
        fontSize="1.4em"
      >
        {pokemon.name}
      </Text>
      <Text
        as="a"
        href={`/pokemon/${pokemon.id}`}
        textDecoration="none"
        backgroundColor="#fff"
        color="#222"
        padding=".7em 1.2em"
        borderRadius="5px"
        fontWeight="bold"
        transition="0.4s"
        _hover={{
          backgroundColor: "#e33d33",
          color: "#fff",
        }}
      >
        Detalhes
      </Text>
    </Flex>
  );
};

export default Card;
