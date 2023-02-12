import Head from "next/head";
import Link from "next/link";

function Blog() {
  return (
    <>
      <Head>
        <title>Nextjs</title>
        <meta
          name="veiwport"
          content="initial-scale=1.0 , width=device-width"
        />
      </Head>
      <div>hello blog Readers</div>
      <Link href="/">Go Back Home</Link>
    </>
  );
}

export default Blog;
