const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Delta Literary Journal: Volume 60 ',
    description: `Website of the 60th volume of LSU's undergraduate literary magazine: Delta Journal.`,
    siteUrl: `https://www.thedelta60.com/`,
  },
  pathPrefix: '/gatsby-starter-grommet',
  plugins: [
  	`gatsby-plugin-sitemap`,
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          })
        ]
      }
    }
  ],
}

