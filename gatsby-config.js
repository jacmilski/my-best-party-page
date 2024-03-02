/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `my-best-party-page`,
    siteUrl: `https://mybestpartypage.pl`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `,
        resolveSiteUrl: ({ site: { siteMetadata: { siteUrl } } }) => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          site: { siteMetadata: { siteUrl } }
        }) => allPages.map(({ path }) => ({
          url: `${siteUrl}${path}`,
          path,
          changefreq: `daily`,
          priority: 0.7,
        })),
        serialize: ({ path }) => ({ url: path }),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-best-party-page`,
        short_name: `MyBestParty`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.GATSBY_DATO_CMS_KEY,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mybestpartypage.pl',
        sitemap: 'https://mybestpartypage.pl/sitemap-index.xml',
        policy: [
          process.env.NODE_ENV === `production`
            ? { userAgent: '*', allow: '/' }
            : { userAgent: '*', disallow: '/' }
        ]
      }
    }
  ]
};