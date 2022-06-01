import {
  Box,
  Flex,
  Avatar,
  Badge,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

import { useCart } from '../context/cart-context';

import { HiMoon, HiSun, HiShoppingCart } from "react-icons/hi";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const cart = useCart()
  return (
    <Box pos={'fixed'} w="container.xl" top={0} mx={'auto'} bg={useColorModeValue('transparent', 'transparent')} px={4} zIndex={10}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>Logo</Box>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <HiMoon /> : <HiSun />}
            </Button>

            <Menu>
              <MenuButton
                as={IconButton}
                cursor={'pointer'}
                minW={0}>
                <HiShoppingCart width={'2x'}/>
                <span className='cart-icon'>
                  {cart?.state?.count}
                </span>
              </MenuButton>
              <MenuList alignItems={'center'} zIndex={2}>
                <br />
                {/* <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem> */}
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>

  );
}