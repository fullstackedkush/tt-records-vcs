import '../styles/globals.css'

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  --main: red;
  body {
    background: var(--main);
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles /> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
