import '../styles/globals.css'
import 'swiper/css';

import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from '../context/cart-context'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CartProvider >
        <Component {...pageProps} />
      </CartProvider>
    </ChakraProvider>
  )
}

export default MyApp
