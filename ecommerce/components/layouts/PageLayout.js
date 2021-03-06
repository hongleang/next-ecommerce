import React from 'react'

import Head from 'next/head'
import { Container } from '@chakra-ui/react'
import Navbar from '../Navbar'

const default_meta = {
    name: "description",
    content: "Generated by create next app"
}

export default function PageLayout({ title='Ecommerce site', meta = default_meta, children }) {
    return (
        <Container maxW='container.xl' mx={'auto'} mt={5} mb={10}>
            <Head>
                <title>{title}</title>
                <meta name={meta.name} content={meta.content} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
        </Container>
    )
}
