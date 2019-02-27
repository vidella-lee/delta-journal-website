const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Delta Literary Journal',
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

