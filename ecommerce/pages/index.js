import { client } from '../libs/client';


import { Footer, Gallery, HeroBanner, Product } from '../components';

import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

export default function Home({ banners, products }) {

  return (
    <>
      <Box pos='relative' mb={{ base: 0, lg: 300 }}>
        {banners && banners.length > 0 &&
          < HeroBanner {...banners[0]} />
        }
        <Gallery products={products} />
      </Box>

      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" fontWeight='bold' mt={6} mb={2} color="blue.900">
          Best Sellers Products
        </Heading>
        <Text color={'gray.500'}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </Text>
      </Box>
      <Grid w='4xl' templateColumns='repeat(3, 1fr)' mt='10' mx='auto' gap={12}>
        {products && products.length > 0 && products?.filter(({ name, for_gallery }) => name && !for_gallery)?.map((product, index) =>
          <GridItem key={`product_${product?._id}_${index}`} w='full'>
            <Product {...product} />
          </GridItem>
        )}
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const banners = await client.fetch(`*[_type == "banner"]`);
  const products = await client.fetch(`*[_type == "product"] [!(_id in path('drafts.**'))]`);

  return {
    props: {
      banners,
      products
    }
  };
}
