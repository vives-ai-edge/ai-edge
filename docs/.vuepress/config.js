module.exports = {
    title: 'AI@EDGE - Homepage',
    description: 'Website for the VLAIO TETRA AI@EDGE project',
    markdown: {
        config: md => {
          md.use(require('markdown-it-pdf'));
          md.render(`@[pdf](${"https://ai-edge.be/meetings/finalsymposium//media/AI-EDGE-Slotsymposium.pdf"})`);
        }
      }
  }