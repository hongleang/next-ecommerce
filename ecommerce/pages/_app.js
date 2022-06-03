import '../styles/globals.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { PageLayout } from '../components';

import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from '../context/cart-context'

function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider>
      <CartProvider >
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </CartProvider>
    </ChakraProvider>
  )
}

export default MyApp
