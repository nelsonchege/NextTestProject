function Pokeamon({ Pokeamon }) {
  return (
    <div>
      Welcome {Pokeamon?.name}
      <img src={Pokeamon?.sprites.front_default} />
    </div>
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
