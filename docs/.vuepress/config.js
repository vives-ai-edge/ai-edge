module.exports = {
    title: 'AI@EDGE - Homepage',
    description: 'Website for the VLAIO TETRA AI@EDGE project',
    markdown: {
        config: md => {
          md.use(require('markdown-it-pdf'), {
            showUrl: false
          });
          md.use(require('markdown-it-sub'));
        }
      },
    themeConfig: {
        nav: [
            { text: 'IoT Incubator', link: 'https://iot-incubator.be/' },
            { text: 'EAVISE', link: 'https://iiw.kuleuven.be/onderzoek/eavise' }
        ]
      },
    serviceWorker: true
  }