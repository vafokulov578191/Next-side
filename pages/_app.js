import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { Theme } from '../theme/Theme'

function MyApp({ Component, pageProps }) {
  return(
  <ChakraProvider theme={Theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
