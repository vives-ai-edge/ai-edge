module.exports = {
    title: 'AI@EDGE - Homepage',
    description: 'Website for the VLAIO TETRA AI@EDGE project',
    markdown: {
        config: md => {
          md.use(require(markdown-it-pdf))
        }
      }
  }