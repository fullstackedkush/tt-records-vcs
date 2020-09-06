import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components';
import { useApollo } from "../utilites";
import {ApolloProvider} from "@apollo/client";
import React from "react";

const GlobalStyles = createGlobalStyle`
  :root {
    --main: white;
  }
  
  body {
    background: var(--main);
  }
`

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
        <GlobalStyles />
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
