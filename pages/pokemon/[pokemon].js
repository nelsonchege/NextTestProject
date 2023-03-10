import Head from "next/head";
import styles from "./pokemon.module.css";

export async function getStaticPaths() {
  let paths = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((Pokemons) => {
      return Pokemons.results.map((pokemon) => `/pokemon/${pokemon.name}`);
    });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // the params,pokemon is the name of the variable beween [] in the file name
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
      <div className={styles.container}>
        <div>Welcome {Pokemon?.name}</div>
        <div>
          {" "}
          <img src={Pokemon?.sprites.front_default} className={styles.img} />
        </div>
      </div>
    </>
  );
}

export default Pokemon;
