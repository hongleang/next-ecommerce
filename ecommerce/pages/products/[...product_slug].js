import React from 'react'

import { client } from '../../libs/client';

import { urlFor } from '../../libs/client';

import { useCart } from '../../context/cart-context';

import { HiPlus, HiMinus } from 'react-icons/hi'

import {
  Box,
  ButtonGroup,
  Button,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';

import { MdLocalShipping } from 'react-icons/md';

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";


export default function product({ product }) {
  const { details, image, name, price } = product

  const { onAddToCart } = useCart()

  const [quantities, setQuantities] = React.useState(0);

  const addQuantity = () => setQuantities((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () => setQuantities((prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0);

  return (
    <>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >{image?.map((im, i) => (<>
              <SwiperSlide key={`product-swiper-${i}`}>
                <Image
                  rounded={'md'}
                  alt={'product image'}
                  src={urlFor(im)}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={{ base: '100%', sm: '600px', lg: '700px' }}
                />
              </SwiperSlide>
            </>
            ))}
            </Swiper>
           
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${price}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </Text>
                <Text fontSize={'lg'}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>

                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Description:
                    </Text>{' '}
                    {details}
                  </ListItem>
                </List>
              </Box>
            </Stack>
            <Stack direction={'row'} w='full'>
              <Button colorScheme={'white'} variant={"outline"} onClick={addQuantity}><HiPlus /></Button>
              <Button colorScheme={'white'} variant={'outline'} onClick={decreaseQuantity}><HiMinus /></Button>
              <Flex w={'full'} borderWidth='1px' borderRadius='lg' justify={'center'} alignItems={'center'} textColor={'gray.500'}>
                {quantities}
              </Flex>
            </Stack>
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={'gray.900'}
              color={'white'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={() => onAddToCart(product, quantities)}
            >
              Add to cart
            </Button>

            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const products = await client.fetch(`*[_type == "product"]`);

  const paths = products.map((product) => ({
    params: { product_slug: [product.slug.current, product._id] },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps(context) {
  const { params: { product_slug } } = context

  // Get prodcut id from from product slug
  const query = `*[_type == "product" && _id == "${product_slug[1]}"]`;
  const product = await client.fetch(query);

  // Show page not found if product is not found
  if (!product || product.length === 0) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      product: product[0] // Single item in the collection
    },
    revalidate: 10, // In seconds
  };
}
