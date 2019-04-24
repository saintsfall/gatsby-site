module.exports = {
    siteMetadata:{
        title: 'SaintsFall',
        author: 'Caio Santos'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-sass'
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'name',
                path: `${__dirname}/src/`
            }
        },
        {
            resolve: 'gatsby-plugin-sharp'
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }

    ]
}