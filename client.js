import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "j76hxkqx",
    dataset: "production",
    apiVersion: "2023-01-16",
    useCdn: true, // `false` if you want to ensure fresh data

})