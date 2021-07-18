import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    background-color: #FFD700;
    background-image: url("https://cdn.pixabay.com/photo/2017/01/11/17/27/drip-1972411_960_720.jpg");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
