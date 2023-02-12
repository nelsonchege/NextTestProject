import Head from "next/head";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const HandleClick = (e) => {
    e.preventDefault();
    router.push("/blog");
  };
  return (
    <>
      <Head>
        <title>Nextjs</title>
        <meta
          name="veiwport"
          content="initial-scale=1.0 , width=device-width"
        />
      </Head>
      <div>hello world</div>
      <button onClick={HandleClick}>Go to blogs page</button>
    </>
  );
}

export default Home;
