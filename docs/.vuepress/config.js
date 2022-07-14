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
          {
            title: 'Homepage',
            collapsable: true,
            children: [
              '/'
            ]
          },
          {
            title: 'Usergroup Meetings',
            collapsable: true,
            children: [
              ['/meetings/usergroup1/', 'UG Meeting 1'],
              ['/meetings/usergroup2/', 'UG Meeting 2'],
              ['/meetings/usergroup3/', 'UG Meeting 3'],
              ['/meetings/usergroup4/', 'UG Meeting 4'],
              ['/meetings/finalsymposium/', 'Final Symposium']
            ]
          },
          {
            title: 'Overview of ...',
            collapsable: true,
            children: [
              ['/overview/hardware/', 'Hardware'],
              ['/overview/frameworks/', 'Frameworks'],
              ['/overview/optimalisaties/', 'Optimalisations'],
              ['/bestpractices/', 'Best Practices']
            ]
          },
          {
            title: 'Workshops',
            collapsable: true,
            children: [
              ['/workshops/edgeimpulse/', 'Edge Impulse'],
              ['/workshops/embeddedvision/', 'Embedded Vision'],
              ['/workshops/stem/', 'STEM']
            ]
          },
          {
            title: 'Use cases',
            collapsable: true,
            children: [
              ['/usecases/abwriting/', 'AB Writing'],
              ['/usecases/seatdetection/', 'Seat Detection'],
              ['/usecases/garagegate/', 'Automatic Garage Gate'],
              ['/usecases/melexis/', 'Thermal Person Detection'],
              ['/usecases/tml/', 'Traffic Detection'],
              ['/usecases/edna/', 'Induction Cooker Touch Sensor'],
              ['/usecases/larbitssisters/', 'Crypto Miner Car'],
              ['/usecases/6wolves/', 'Squat Detection'],
              ['/usecases/skw/', 'Stray Cats']
            ]
          }
        ]
      },
    serviceWorker: true
  }