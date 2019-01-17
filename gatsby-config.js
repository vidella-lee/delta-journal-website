const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Delta Literary Journal',
  },
  pathPrefix: '/gatsby-starter-grommet',
  plugins: [
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

