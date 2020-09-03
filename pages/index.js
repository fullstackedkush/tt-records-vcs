import Head from 'next/head'
import styles from '../styles/Home.module.css';
import styled from 'styled-components';


const Wrapper = styled.div`
    padding: 172px 150px 142px;
`

const Hero = ({ title, children }) => (
  <Wrapper>
    <h1>{ title }</h1>
    { children }
  </Wrapper>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero title="yeet yeety yeet">

<h3>more things here</h3>

        </Hero>
    </>
  )
}
