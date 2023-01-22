import groq from 'groq'
import sanityClient from '../../client'

export default function SiteMap() {
    return <div>loading</div>
}

export async function getServerSideProps({ res }) {
    const baseUrl = `http://smartcaresupaul.in`

    // 1step
    const services = groq`{
      "countries": *[_type == 'service']{slug},
    }`
    const blogs = groq`{
      "countries": *[_type == 'post']{slug},
    }`
    const pages = groq`{
      "countries": *[_type == 'page']{slug},
    }`

    // 2nd step
    const url1 = await sanityClient.fetch(services)
    const url2 = await sanityClient.fetch(blogs)
    const url3 = await sanityClient.fetch(pages)

    // 3rd step
    // services
    const fet1 = url1.countries.map(page => {
        const slug =
            page.slug.current === '/' ? '/' : `/${page.slug.current}`
        return `
      <loc>${baseUrl}/service${slug}</loc>
      <changefreq>monthly</changefreq>
      <priority>1</priority>
    `
    })

    // blogs
    const fet2 = url2.countries.map(page => {
        const slug =
            page.slug.current === '/' ? '/' : `/${page.slug.current}`
        return `
      <loc>${baseUrl}/blog${slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    `
    })

    // pages
    const fet3 = url3.countries.map(page => {
        const slug =
            page.slug.current === '/' ? '/' : `/${page.slug.current}`
        return `
      <loc>${baseUrl}/page${slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    `
    })

    const loc1 = [...fet1]
    const loc2 = [...fet2]
    const loc3 = [...fet3]

    const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${loc1
            .map(location => {
                return `<url>
                      ${location}
                    </url>
                  `
            })
            .join('')}
            ${loc2
            .map(location => {
                return `<url>
                      ${location}
                    </url>
                  `
            })
            .join('')}
              ${loc3
            .map(location => {
                return `<url>
                      ${location}
                    </url>
                  `
            })
            .join('')}
    </urlset>
    `
    res.setHeader('Content-Type', 'text/xml')
    res.write(createSitemap())
    res.end()
    return {
        props: {},
    }
}