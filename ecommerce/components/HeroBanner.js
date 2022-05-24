import React from 'react';

import { urlFor } from '../libs/client';
import { FaArrowRight } from 'react-icons/fa';

import {
  Box,
  Button,
  chakra,
  HStack,
  Image,
  useColorModeValue,
  Text
} from "@chakra-ui/react";

const HeroBanner = ({ buttonText, dec, discount, image, largeText1, largeText2, midText, product, smallText, scaleTime }) => {

  return (
    <Box pos='relative' w='container.xl' minH='md' bg='blackAlpha.300' mt='1.5' borderRadius="lg">
      <Box px='8' py='10' lineHeight={{ base: '1.2', md: '1' }}>
        <Text
          as='h6'
          ml={{ base: '0', md: '3' }}
          fontSize='lg'
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide">
          {dec}
        </Text>
        <Text
          as='h1'
          my='0'
          ml={{ base: '0', md: '3' }}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          fontWeight="bold">
          {largeText1}
        </Text>
        <Text
          as='h3'
          mb='9'
          color='white'
          fontSize={{ base: "60", sm: "70", md: "100", lg: "130" }}
          fontWeight="bold"
          textTransform="uppercase">
          {largeText2}
        </Text>
        <HStack ml={{ base: '0', md: '3' }}>
          <Button colorScheme='red' size='md'>
            <Text as='span' fontWeight='regular' mr={2}>{buttonText}</Text>
            <FaArrowRight />
          </Button>
        </HStack>
        <Image
          pos='absolute'
          top='50'
          left='550'
          display={{ base: 'none', lg: 'block' }}
          boxSize='400px'
          objectFit='cover'
          transform='scaleX(-1) rotate(2deg)'
          src={urlFor(image)}
          alt='homeBannerProduct'
        />
      </Box>
      <Box w='xs' display={{ base: 'none', xl: 'block' }} pos='absolute' bottom='50' right='30'>
        <Text as='h6' fontSize='sm' fontWeight="semibold">
          {product}
        </Text>
        <Text as='p' fontSize='sm'>
          {midText}
        </Text>
      </Box>
    </Box>
  )
}

export default HeroBanner

