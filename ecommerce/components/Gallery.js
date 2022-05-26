import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import { Stack, Text } from '@chakra-ui/react';

import { Product } from './index'

import styles from '../styles/Home.module.css'

const Gallery = ({ products = [] }) => {
    return (
        <Stack direction={{ base: "column", lg: 'row' }} pos={{ base: 'static', lg: 'absolute' }} bottom={-360} right={0} align={'center'} spacing={'md'}>
            <Stack direction={'column'} spacing={1}>
                <Text fontSize={{ base: "xl", md: "xl", lg: "2xl" }}>
                    Our shop:
                </Text>
                <Text mb={4} fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} fontWeight="bold">
                    Feature products
                </Text>
            </Stack>
            <Swiper
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                className={styles.swiper}
                centeredSlides={true}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={15}
                slidesPerView={3}

            >
                {products.length > 0 && products
                    ?.filter(({ name, for_gallery }) => name && for_gallery)
                    ?.map((product, index) => (
                        <SwiperSlide className={styles.swiper_slide}>
                            <Product key={`gallery_${product?._id}_${index}`} isGallery  {...product} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Stack>
    )
}

export default Gallery