import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID ,
    dataset: 'production',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN ,
    apiVersion: '2021-08-31',
})


