import React from 'react';

import { urlFor } from '../libs/client';

import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import styles from '../styles/components/HeroBanner.module.css'

const HeroBanner = ({ buttonText, dec, discount, image, largeText1, largeText2, midText, products, smallText, scaleTime }) => {
  return (<>
    <SimpleGrid className={styles.simpleGrid} w={{ base: 'full', lg: '6xl' }} h="lg" mt={{ base: 50, lg: 70 }} columns={{ base: 1, md: 2 }} spacing={0} bg="gray.100">
      <Flex py={{ base: '100', md: '0' }} bg="brand.400" className={styles.image_wrapper}>
        {/* Blur effect*/}
        <Image
          pos="absolute"
          top="10"
          left="-10"
          src={urlFor(image)}
          alt="Trending product"
          fit="cover"
          w={{ base: "full", sm: 'lg', md: 'full' }}
          h={{ base: 64, md: "full" }}
          backgroundImage={`url(${urlFor(image)})`}
          filter='blur(30px)'
          opacity=".4"
          transform={{ lg: "scale(1.2) translateX(10%)" }}
          loading="lazy"
        />
        <Image
          pos="absolute"
          top={{ base: 0, lg: "-50" }}
          src={urlFor(image)}
          alt="Trending product"
          fit="cover"
          w={{ base: "full", sm: 'lg', md: 'full' }}
          h={{ base: 64, md: "full" }}
          backgroundImage={`url(${urlFor(image)})`}
          transform={{ lg: "scale(1.3) translateX(10%)" }}
          loading="lazy"
        />
      </Flex>
      <Flex className={styles.flex_wrapper} px={{ base: 4, md: 8, lg: 0 }} py={{ base: 4, md: 8, lg: 24 }}>
        <chakra.span
          color={"brand.600"}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          {smallText}
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={"brand.600"}
          textShadow="2px 0 currentcolor"
        >
          {largeText1}
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          {midText}
        </chakra.p>
        <Flex>
          <chakra.h2
            mb={4}
            mr={5}
            fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
            fontWeight="regular"
            textDecoration="line-through"
            color={"gray.600"}
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
            {25} $
          </chakra.h2>
          <chakra.h2
            mb={4}
            display="inline"
            fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
            color={useColorModeValue("brand.600", "gray.300")}
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
            15 $
          </chakra.h2>
        </Flex>

        <Box display="inline-flex" rounded="md" shadow="md">
          <Button
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            colorScheme='teal' 
            size='sm'
          >
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </SimpleGrid>
  </>
  )
}

export default HeroBanner