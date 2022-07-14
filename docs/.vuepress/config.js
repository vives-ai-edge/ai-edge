module.exports = {
    title: 'AI@EDGE',
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
        ],
        sidebar: [
          '/',
          {
            title: 'Usergroup Meetings',
            collapsable: false,
            children: [
              ['/meetings/usergroup1/', 'UG Meeting 1'],
              ['/meetings/usergroup2/', 'UG Meeting 2'],
              ['/meetings/usergroup3/', 'UG Meeting 3'],
              ['/meetings/usergroup4/', 'UG Meeting 4'],
              ['/meetings/finalsymposium/', 'Final Symposium']
            ]
          },
        ]
      },
    serviceWorker: true
  }