import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BetaComp",
  description: "Climbing's new Olympic Game",
  base: '/BetaComp/',
  themeConfig: {
    socialLinks: [
      { icon: 'youtube', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'instagram', link: 'https://www.instagram.com/klimbeta/' }
    ],
    footer: {
      message: '',
      copyright: 'Copyright BetaComp © 2023-present'
    },
    search: {
      provider: 'local'
    },

    siteTitle: 'BetaComp',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference(),
      '/tests/': sidebarTests(),
      '/development/': sidebarDevelopment(),
      '/sponsor/': sidebarSponsor(),
    },
  }
})

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatBetaComp',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/ReferenceOverview',
      activeMatch: '/reference/'
    },
    {
      text: 'Tests',
      link: '/tests/TestsOverview',
      activeMatch: '/tests/'
    },
    {
      text: 'Development',
      link: 'development/DevelopmentOverview',
      activeMatch: '/development/'
    },
    {
      text: 'Sponsors',
      link: '/sponsor/Sponsor',
      activeMatch: '/sponsor/'
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What isBetaComp?', link: '/guide/What/WhatBetaComp' },
        { text: 'What is Beta?', link: '/guide/What/WhatBeta' }
      ]
    },
    {
      text: 'Who',
      collapsed: false,
      items: [
        { text: 'Spectator', link: '/guide/Who/Spectator' },
        { text: 'Gym', link: '/guide/Who/Gym' },
        { text: 'Climber', link: '/guide/Who/Climber' },
        { text: 'Coach', link: '/guide/Who/Coach' },
        { text: 'Gear Company', link: '/guide/Who/GearCompany' },
      ]
    }
  ]
}

function sidebarReference() {
  return [
    {
      text: '🔷 Beta System',
      collapsed: false,
      items: [
        { text: 'What is Beta?', link: '/reference/Beta/WhatBeta' }
      ]
    },
    {
      text: '🟠 Move Subsystem',
      collapsed: true,
      items: [
        { text: '🟠 What is Move?', link: '/reference/Move/MoveOverview' },
        {
          text: '🟠 BodyMove',
          collapsed: true,
          items: [
            { text: '🟠 What is Move?', link: '/reference/Move/MoveOverview' }
          ]
        },
        {
          text: '🟠 ArmMove',
          collapsed: true,
          items: [
            { text: '🟠 What is Move?', link: '/reference/Move/MoveOverview' }
          ]
        },
        {
          text: '🟠 HandMove',
          collapsed: true,
          items: [
            { text: '🟠 What is Move?', link: '/reference/Move/MoveOverview' }
          ]
        },
        {
          text: '🟠 LegMove',
          collapsed: true,
          items: [
            { text: 'What is Move?', link: '/reference/Move/MoveOverview' }
          ]
        },
        {
          text: '🟠 FootMove',
          collapsed: true,
          items: [
            { text: 'What is Move?', link: '/reference/Move/MoveOverview' }
          ]
        },
        {
          text: '🟠 ToolMove',
          collapsed: true,
          items: [
            { text: 'What is a Tool?', link: '/reference/Move/MoveOverview' }
          ]
        },
      ]
    },
    {
      text: '🔺 Route Subsystem',
      collapsed: true,
      items: [
        { text: '🔺 What is Route?', link: '/reference/Route/RouteOverview' }
      ]
    },
    {
      text: '🟩 Wall Subsystem',
      collapsed: true,
      items: [
        { text: '🟩 What is Wall?', link: '/reference/Wall/WallOverview' }
      ]
    },
    {
      text: ' 💜 Neuro Subsystem',
      collapsed: true,
      items: [
        { text: '💜 What is Neuro?', link: '/reference/Neuro/NeuroOverview' }
      ]
    },
    { text: 'Gallery', link: '/reference/Gallery/Gallery' },
    { text: 'Glossary', link: '/reference/Glossary/Glossary' }

  ]
}

function sidebarTests() {
  return [
    {
      text: 'Tests',
      collapsed: false,
      items: [
        { text: 'What i', link: '/guide/What/WhatBetaComp' }
      ]
    }
  ]
}

function sidebarDevelopment() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What BetaComp', link: '/guide/What/WhatBetaComp' }
      ]
    }
  ]
}

function sidebarSponsor() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What BetaComp', link: '/guide/What/WhatBetaComp' }
      ]
    }
  ]
}