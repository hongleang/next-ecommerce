import React from 'react';

import { urlFor } from '../libs/client';

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';


const Product = ({ _id, details, image, name, price, slug, isGallery }) => {
  return (
    <Center
      style={{cursor: 'pointer'}}
      transition="transform 500ms ease-in"
      _hover={{
        transform: 'translateY(-10px)'
      }}>
      <Box
        p={6}
        maxW={'300px'}
        w={'full'}
        boxShadow={'md'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        {image && image?.length > 0 && <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${urlFor(image[0])})`,
            filter: 'blur(10px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(30px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={urlFor(image[0])}
          />
        </Box>}

        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} textAlign="center">
            {details}
          </Text>
          {!isGallery && <>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'column'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {price?.toFixed(2) ?? 0} $
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {(price * 1.30).toFixed(2)} $
              </Text>
            </Stack>
          </>
          }
        </Stack>
      </Box>
    </Center>
  )
}

export default Product

