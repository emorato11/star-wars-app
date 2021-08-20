module.exports = {
    devServer: {
      https: true
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/star-wars-app/'
    : '/',
    css: {
      loaderOptions: {
          sass: {
            additionalData: `
                  @import "@/assets/scss/_theme.scss";
              `
          }
      }
    }
  }