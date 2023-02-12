import Head from "next/head";

function Pokeamon({ Pokeamon }) {
  return (
    <>
      <Head>
        <title>{Pokeamon?.name}</title>
        <meta
          name="veiwport"
          content="initial-scale=1.0 , width=device-width"
        />
      </Head>
      <div>
        Welcome {Pokeamon?.name}
        <img src={Pokeamon?.sprites.front_default} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
  const Pokeamon = await res.json();

  return {
    props: {
      Pokeamon,
    },
  };
}

export default Pokeamon;
