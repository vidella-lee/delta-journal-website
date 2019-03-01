const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Delta Literary Journal',
    description: `Website of LSU's undergraduate literary magazine: Delta Journal.`,
    siteUrl: `https://www.thedeltajournal.com/`,
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

