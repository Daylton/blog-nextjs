import Head from "next/head";
import Image from "next/image";

const Hello = () => (
  <>
    <Head>
      <title>Hello there :: My Blog</title>
      <meta property="og:title" content="Hello there :: My Blog" />
    </Head>
    <article>
      <h1>Hello There!</h1>
      <Image src="/post/hello-there/preview2_28.png" width={480} height={480} />
    </article>
  </>
);

export default Hello;
