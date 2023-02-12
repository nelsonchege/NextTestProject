import Head from "next/head";

export async function getStaticPaths() {
  let paths = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((Pokemons) => {
      console.log(Pokemons);
      return Pokemons.results.map((pokemon) => `/pokemon/${pokemon.name}`);
    });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const Pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  ).then((res) => res.json());

  return {
    props: {
      Pokemon,
    },
  };
}

function Pokemon({ Pokemon }) {
  return (
    <>
      <Head>
        <title>{Pokemon?.name}</title>
        <meta
          name="veiwport"
          content="initial-scale=1.0 , width=device-width"
        />
      </Head>
      <div>
        Welcome {Pokemon?.name}
        <img src={Pokemon?.sprites.front_default} />
      </div>
    </>
  );
}

export default Pokemon;
