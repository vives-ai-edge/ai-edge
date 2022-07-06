module.exports = {
    title: 'AI@EDGE',
    description: 'Website for the VLAIO TETRA AI@EDGE project',
    markdown: {
        config: md => {
          md.use(require('markdown-it-pdf'))
        }
      }
  }