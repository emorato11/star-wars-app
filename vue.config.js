module.exports = {
    devServer: {
      https: true
    },
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