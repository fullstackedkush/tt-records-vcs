import Head from 'next/head'
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>TT records homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title="yeet yeety yeet">
        <h3>more things here</h3>
      </Hero>
    </>
  )
}
