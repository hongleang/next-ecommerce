import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: '4uu8h6g8',
    dataset: 'production',
    apiVersion: '2022-05-22',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export {
    client,
    urlFor
}