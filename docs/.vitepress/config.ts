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
      text: 'What ❔',
      collapsed: true,
      items: [
        { text: 'What isBetaComp?', link: '/guide/What/WhatBetaComp' },
        { text: 'What is Beta?', link: '/guide/What/WhatBeta' }
      ]
    },
    {
      text: 'Why ❔',
      collapsed: true,
      items: [
        { text: 'Why have a BetaComp?', link: '/guide/Why/WhyBetaComp' },
      ]
    },
    {
      text: 'Who ❔',
      collapsed: true,
      items: [
        { text: 'Climber', link: '/guide/Who/Climber' },
        { text: 'Spectator', link: '/guide/Who/Spectator' },
        { text: 'Coach', link: '/guide/Who/Coach' },
        { text: 'Gym', link: '/guide/Who/Gym' },
        { text: 'Gear Company', link: '/guide/Who/GearCompany' },
      ]
    },
    {
      text: 'Where ❔',
      collapsed: true,
      items: [
        { text: 'Where is BetaComp held?', link: '/guide/Where/WhereBetaComp' },
      ]
    },
    {
      text: 'How ❔',
      collapsed: true,
      items: [
        { text: 'How is BetaComp being created?', link: '/guide/How/HowBetaComp' },
        { text: 'OtherSport', link: '/guide/How/OtherSport' }
      ]
    },
  ]
}

function sidebarReference() {
  return [
    {
      text: '🔷 Beta System',
      collapsed: true,
      items: [
        { text: '❔ What is Beta?', link: '/reference/Beta/WhatBeta' },
        {
          text: '🔷 Beta Sequence',
          collapsed: true,
          items: [
            { text: '🔷🔷 What is a Beta Sequence?', link: '/reference/Beta/BetaSequence/Overview' }
          ]
        },
        {
          text: '🔷 Beta Action',
          collapsed: true,
          items: [
            { text: '❔ What are Beta Actions?', link: '/reference/Beta/BetaAction/Overview' },
            { text: '🔷 AskBeta', link: '/reference/Beta/BetaAction/AskBeta' },
            { text: '🔷 ChangeBeta', link: '/reference/Beta/BetaAction/ChangeBeta' },
            { text: '🔷 GetBeta', link: '/reference/Beta/BetaAction/GetBeta' },
            { text: '🔷 GiveBeta', link: '/reference/Beta/BetaAction/GiveBeta' },
            { text: '🔷 LinkBeta', link: '/reference/Beta/BetaAction/LinkBeta' },
            { text: '🔷 MimeBeta', link: '/reference/Beta/BetaAction/MimeBeta' },
            { text: '🔷 ParseBeta', link: '/reference/Beta/BetaAction/ParseBeta' },
            { text: '🔷 PerformBeta', link: '/reference/Beta/BetaAction/PerformBeta' },
            { text: '🔷 RecordBeta', link: '/reference/Beta/BetaAction/RecordBeta' },
            { text: '🔷 SprayBeta', link: '/reference/Beta/BetaAction/SprayBeta' },
            { text: '🔷 TestBeta', link: '/reference/Beta/BetaAction/TestBeta' },
          ]
        },
      ]
    },
    {
      text: '🟠 Move Subsystem',
      collapsed: true,
      items: [
        { text: '❔ What is Move?', link: '/reference/Move/MoveOverview' },
        {
          text: '🟠🟠🟠 Move Sequence',
          collapsed: true,
          items: [
            { text: '❔ What is MoveSequence?', link: '/reference/Move/MoveSequence/Overview' }
          ]
        },
        {
          text: '🟠 BodyMove',
          collapsed: true,
          items: [
            { text: '❔ What is BodyMove?', link: '/reference/Move/BodyMove/Overview' },
            { text: '🟠 BodyAbsorb', link: '/reference/Move/BodyMove/BodyAbsorb' },
            { text: '🟠 BodyAlign', link: '/reference/Move/BodyMove/BodyAlign' },
            { text: '🟠 BodyArch', link: '/reference/Move/BodyMove/BodyArch' },
            { text: '🟠 BodyCompression', link: '/reference/Move/BodyMove/BodyCompression' },
            { text: '🟠 BodyCrunch', link: '/reference/Move/BodyMove/BodyCrunch' },
            { text: '🟠 BodyDrop', link: '/reference/Move/BodyMove/BodyDrop' },
            { text: '🟠 BodyExpansion', link: '/reference/Move/BodyMove/BodyExpansion' },
            { text: '🟠 BodyLever', link: '/reference/Move/BodyMove/BodyLever' },
            { text: '🟠 BodyLock', link: '/reference/Move/BodyMove/BodyLock' },
            { text: '🟠 BodyRotate', link: '/reference/Move/BodyMove/BodyRotate' },
            { text: '🟠 BodySlot', link: '/reference/Move/BodyMove/BodySlot' },
            { text: '🟠 BodySwap', link: '/reference/Move/BodyMove/BodySwap' },
            { text: '🟠 BodyTwist', link: '/reference/Move/BodyMove/BodyTwist' },
            { text: '🟠 BodyWhip', link: '/reference/Move/BodyMove/BodyWhip' },
            { text: '🟠 Brachiation', link: '/reference/Move/BodyMove/Brachiation' },
            { text: '🟠 Fall', link: '/reference/Move/BodyMove/Fall' },
          ]
        },
        {
          text: '🟠 ArmMove',
          collapsed: true,
          items: [
            { text: '❔ What is ArmMove?', link: '/reference/Move/ArmMove/Overview' },
            { text: '🟠 ArmAbduction', link: '/reference/Move/ArmMove/ArmAbduction' },
            { text: '🟠 ArmAbsorb', link: '/reference/Move/ArmMove/ArmAbsorb' },
            { text: '🟠 ArmAlign', link: '/reference/Move/ArmMove/ArmAlign' },
            { text: '🟠 ArmArc', link: '/reference/Move/ArmMove/ArmArc' },
            { text: '🟠 ArmArch', link: '/reference/Move/ArmMove/ArmArch' },
            { text: '🟠 ArmBuckle', link: '/reference/Move/ArmMove/ArmBuckle' },
            { text: '🟠 ArmBump', link: '/reference/Move/ArmMove/ArmBump' },
            { text: '🟠 ArmDrop', link: '/reference/Move/ArmMove/ArmDrop' },
            { text: '🟠 ArmExtension', link: '/reference/Move/ArmMove/ArmExtension' },
            { text: '🟠 ArmFlag', link: '/reference/Move/ArmMove/ArmFlag' },
            { text: '🟠 ArmFlexion', link: '/reference/Move/ArmMove/ArmFlexion' },
            { text: '🟠 ArmHook', link: '/reference/Move/ArmMove/ArmHook' },
            { text: '🟠 ArmLever', link: '/reference/Move/ArmMove/ArmLever' },
            { text: '🟠 ArmLock', link: '/reference/Move/ArmMove/ArmLock' },
            { text: '🟠 ArmProp', link: '/reference/Move/ArmMove/ArmProp' },
            { text: '🟠 ArmReach', link: '/reference/Move/ArmMove/ArmReach' },
            { text: '🟠 ArmRockOver', link: '/reference/Move/ArmMove/ArmRockOver' },
            { text: '🟠 ArmRotation', link: '/reference/Move/ArmMove/ArmRotation' },
            { text: '🟠 ArmShake', link: '/reference/Move/ArmMove/ArmShake' },
            { text: '🟠 ArmSlot', link: '/reference/Move/ArmMove/ArmSlot' },
            { text: '🟠 ArmSwing', link: '/reference/Move/ArmMove/ArmSwing' },
            { text: '🟠 ArmTangent', link: '/reference/Move/ArmMove/ArmTangent' },
            { text: '🟠 ArmWhip', link: '/reference/Move/ArmMove/Arm#' },
            { text: '🟠 ArmWrap', link: '/reference/Move/ArmMove/ArmWrap' },
          ]
        },
        {
          text: '🟠 HandMove',
          collapsed: true,
          items: [
            { text: '❔ What is Move?', link: '/reference/Move/HandMove/Overview' },
            { text: '🟠 HandCatch', link: '/reference/Move/HandMove/HandCatch' },
            { text: '🟠 HandMatch', link: '/reference/Move/HandMove/HandMatch' },
            { text: '🟠 HandNudge', link: '/reference/Move/HandMove/HandNudge' },
            { text: '🟠 HandOverlap', link: '/reference/Move/HandMove/HandOverlap' },
            { text: '🟠 HandRoll', link: '/reference/Move/HandMove/HandRoll' },
            { text: '🟠 HandRotation', link: '/reference/Move/HandMove/HandRotation' },
            { text: '🟠 HandSlide', link: '/reference/Move/HandMove/HandSlide' },
            { text: '🟠 HandSlot', link: '/reference/Move/HandMove/HandSlot' },
            { text: '🟠 HandSmear', link: '/reference/Move/HandMove/HandSmear' },
            { text: '🟠 HandStab', link: '/reference/Move/HandMove/HandStab' },
            { text: '🟠 HandSwap', link: '/reference/Move/HandMove/HandSwap' },
            { text: '🟠 HandWrap', link: '/reference/Move/HandMove/HandWrap' },
          ]
        },
        {
          text: '🟠 LegMove',
          collapsed: true,
          items: [
            { text: '❔ What is LegMove?', link: '/reference/Move/LegMove/Overview' },
            { text: '🟠 LegAbduction', link: '/reference/Move/LegMove/LegAbduction' },
            { text: '🟠 LegAbsorb', link: '/reference/Move/LegMove/LegAbsorb' },
            { text: '🟠 LegAlign', link: '/reference/Move/LegMove/LegAlign' },
            { text: '🟠 LegArc', link: '/reference/Move/LegMove/LegArc' },
            { text: '🟠 LegArch', link: '/reference/Move/LegMove/LegArch' },
            { text: '🟠 LegBuckle', link: '/reference/Move/LegMove/LegBuckle' },
            { text: '🟠 LegBump', link: '/reference/Move/LegMove/LegBump' },
            { text: '🟠 LegDrop', link: '/reference/Move/LegMove/LegDrop' },
            { text: '🟠 LegExtension', link: '/reference/Move/LegMove/LegExtension' },
            { text: '🟠 LegFlag', link: '/reference/Move/LegMove/LegFlag' },
            { text: '🟠 LegFlexion', link: '/reference/Move/LegMove/LegFlexion' },
            { text: '🟠 LegHook', link: '/reference/Move/LegMove/LegHook' },
            { text: '🟠 LegLever', link: '/reference/Move/LegMove/LegLever' },
            { text: '🟠 LegLock', link: '/reference/Move/LegMove/LegLock' },
            { text: '🟠 LegProp', link: '/reference/Move/LegMove/LegProp' },
            { text: '🟠 LegReach', link: '/reference/Move/LegMove/LegReach' },
            { text: '🟠 LegRockOver', link: '/reference/Move/LegMove/LegRockOver' },
            { text: '🟠 LegRotation', link: '/reference/Move/LegMove/LegRotation' },
            { text: '🟠 LegShake', link: '/reference/Move/LegMove/LegShake' },
            { text: '🟠 LegSlot', link: '/reference/Move/LegMove/LegSlot' },
            { text: '🟠 LegSmear', link: '/reference/Move/LegMove/LegSmear' },
            { text: '🟠 LegSwing', link: '/reference/Move/LegMove/LegSwing' },
            { text: '🟠 LegTangent', link: '/reference/Move/LegMove/LegTangent' },
            { text: '🟠 LegWhip', link: '/reference/Move/LegMove/LegWhip' },
            { text: '🟠 LegWrap', link: '/reference/Move/LegMove/LegWrap' },
          ]
        },
        {
          text: '🟠 FootMove',
          collapsed: true,
          items: [
            { text: '🟠🟠 What is FootMove?', link: '/reference/Move/FootMove/Overview' },
            { text: '🟠 FootCatch', link: '/reference/Move/FootMove/FootCatch' },
            { text: '🟠 FootMatch', link: '/reference/Move/FootMove/FootMatch' },
            { text: '🟠 FootNudge', link: '/reference/Move/FootMove/FootNudge' },
            { text: '🟠 FootOverlap', link: '/reference/Move/FootMove/FootOverlap' },
            { text: '🟠 FootPivot', link: '/reference/Move/FootMove/FootPivot' },
            { text: '🟠 FootRoll', link: '/reference/Move/FootMove/FootRoll' },
            { text: '🟠 FootRotation', link: '/reference/Move/FootMove/FootRotation' },
            { text: '🟠 FootSlide', link: '/reference/Move/FootMove/FootSlide' },
            { text: '🟠 FootSlot', link: '/reference/Move/FootMove/FootSlot' },
            { text: '🟠 FootSmear', link: '/reference/Move/FootMove/FootSmear' },
            { text: '🟠 FootStab', link: '/reference/Move/FootMove/FootStab' },
            { text: '🟠 FootSwap', link: '/reference/Move/FootMove/FootSwap' },
          ]
        },
        {
          text: '🟠 ToolMove',
          collapsed: true,
          items: [
            { text: '🟠 What is ToolMove?', link: '/reference/Move/ToolMove/Overview' }
          ]
        },
      ]
    },
    {
      text: '🔺 Route Subsystem',
      collapsed: true,
      items: [
        { text: '🔺🔺 What is Route?', link: '/reference/Route/RouteOverview' },
        {
          text: '🔺 Route Sequence',
          collapsed: true,
          items: [
            { text: '🔺🔺 What is Route?', link: '/reference/Route/RouteOverview' }
          ]
        },
      ]
    },
    {
      text: '🟩 Wall Subsystem',
      collapsed: true,
      items: [
        { text: '🟩🟩 What is Wall?', link: '/reference/Wall/WallOverview' },
        {
          text: '🟩🟩 Wall Sequence',
          collapsed: true,
          items: [
            { text: '🟩 What is Wall Sequence?', link: '/reference/Wall/WallSequence/Overview' }
          ]
        },
      ]
    },
    {
      text: ' 💜 Neuro Subsystem',
      collapsed: true,
      items: [
        { text: '💜💜 What is Neuro?', link: '/reference/Neuro/NeuroOverview' }
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