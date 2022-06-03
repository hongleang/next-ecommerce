import React from 'react';
import { urlFor } from '../libs/client';

import {
  chakra,
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Button,
  Menu,
  MenuItem,
  MenuDivider,
  MenuButton,
  MenuList,
  Stack,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';

import { useCart } from '../context/cart-context';

import { HiMoon, HiSun, HiShoppingCart } from "react-icons/hi";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { cartItems, clearCart, onRemoveCart } = useCart();

  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container pos={'fixed'} top={0} maxW={'container.xl'} zIndex={100}>
      <Box w="full" mx={'auto'} bg={scrollPosition > 70 ? 'rgba(255, 255, 255, 1)' :'transparent'}   boxShadow={scrollPosition > 80 && 'lg'} px={4} py={2} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <chakra.h2 size="2xl" fontWeight="bold" textTransform="uppercase">Logo</chakra.h2>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Tooltip label={`Dark mode ${colorMode === 'light' ? 'OFF' : 'ON'}`} aria-label='A tooltip'>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <HiMoon /> : <HiSun />}
                </Button>
              </Tooltip>

              <Menu closeOnSelect={false} size={'lg'}>
                <MenuButton
                  as={IconButton}
                  cursor={'pointer'}
                  px={4}
                >
                  <Flex justifyContent={'center'}>
                    <HiShoppingCart />
                    <span className='cart-icon'>
                      {cartItems?.length || 0}
                    </span>
                  </Flex>
                </MenuButton>
                <MenuList alignItems={'center'} zIndex={2}>
                  {cartItems && cartItems.length > 0 ? cartItems.slice(0, 3).map((cart, i) => (
                    <React.Fragment key={`menu_items_carts${cart?._id || i}`}>
                      {i > 0 && <MenuDivider />}
                      <MenuItem>
                        <Stack direction={'row'}>
                          <Image w={'20'} h={'auto'} objectFit={'cover'} src={urlFor(cart.image[0])} alt={cart.name} />
                          <Stack direction={'column'}>
                            <chakra.h3 fontWeight={'bold'} textTransform={'uppercase'}>{cart.name}</chakra.h3>
                            <chakra.h4 textTransform={'uppercase'}>Quantity: {cart.totalQuantities}</chakra.h4>
                            <chakra.h4 fontWeight={'bold'} textTransform={'uppercase'} fontSize={'lg'}>
                              Total prices : {cart.totalPrice} $
                            </chakra.h4>
                            <Button my={'3'} colorScheme={'orange'} onClick={() => onRemoveCart(cart)}>Delete cart</Button>
                          </Stack>
                        </Stack>
                      </MenuItem>
                    </React.Fragment>
                  )) :
                    <chakra.h4 w={'full'} textAlign={'center'} textTransform={'uppercase'} fontSize={'md'}>
                      Cart is empty!
                    </chakra.h4>}

                  {cartItems && cartItems.length > 0 && <Flex justify={'center'} my={5} w={'full'}>
                    <Button colorScheme={'red'} onClick={clearCart}>Clear all carts !</Button>
                  </Flex>}
                  {cartItems.length > 2 && <MenuItem textAlign={'center'}>See full cart -- Future feature</MenuItem>}
                  {/* <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem> */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </Container>


  );
}