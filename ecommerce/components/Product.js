import React from 'react';
import Link from 'next/link'

import { urlFor } from '../libs/client';

import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react';

import styles from '../styles/components/Product.module.css'

const Product = ({ _id, details, image, name, price, slug, isGallery }) => {
  return (
    <Box className={styles.product_wrapper}>
      <Link href={{ pathname: `/products/${slug.current}/${_id}` }}>
        <Box className={styles.product_container} boxShadow={'md'} rounded={'lg'} zIndex={1}>
          {image && image?.length > 0 && <Box
            className={styles.image_wrapper}
            style={{ "--background-image": `url(${urlFor(image[0])})` }}
            rounded={'lg'}
            mt={-12}
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
              zIndex={3}
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
            </>}
          </Stack>
        </Box>
      </Link>
    </Box>
  )
}

export default Product

