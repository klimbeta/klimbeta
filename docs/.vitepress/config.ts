import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Klimbeta",
  description: "A Vision of Climbing",
  base: '/klimbeta/',
  ignoreDeadLinks: true,
  lastUpdated: true,

  themeConfig: {
    outline: [2, 3],
    logo: '/blue-diamond-48.png',
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@Klimbeta' },
      { icon: 'instagram', link: 'https://www.instagram.com/klimbeta/' }
    ],
    footer: {
      message: '<a href="https://klimbeta.github.io/klimbeta/development/Contact">Contact</a>',
      copyright: 'Copyright Klimbeta © 2023-present'
    },
    search: {
      provider: 'local'
    },

    siteTitle: 'Klimbeta',
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference(),
      '/tests/': sidebarTests(),
      '/development/': sidebarDevelopment(),
      '/betacomp/': sidebarBetaComp(),
    },
  }
})

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/What/WhatKlimbeta',
      activeMatch: '/guide/'
    },
    {
      text: 'Reference',
      link: '/reference/ReferenceOverview',
      activeMatch: '/reference/'
    },
    {
      text: 'BetaComp',
      link: '/betacomp/WhatBetaComp',
      activeMatch: '/betacomp/'
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
      text: 'Sponsor',
      link: '/sponsor/Sponsor',
      activeMatch: '/sponsor/'
    },
    {
      text: '🌲 Plantbeta',
      link: '/guide/Why/Plantbeta',
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'What ❔',
      collapsed: true,
      items: [
        { text: '🔷 What is Beta?', link: '/guide/What/WhatBeta' },
        { text: '🔷 What is Klimbeta?', link: '/guide/What/WhatKlimbeta' },
        { text: '🔷 What is this Klimbeta Website?', link: '/guide/What/WhatKlimbetaWebsite' },

      ]
    },
    {
      text: 'Why ❔',
      collapsed: true,
      items: [
        { text: '❔🔷 How does Klimbeta provide Value to Climbers?', link: '/guide/Why/Value' },
        { text: '❔🌲 How does Klimbeta help combat Climate Change?', link: '/guide/Why/Plantbeta' },

      ]
    },
    {
      text: 'Who ❔',
      collapsed: true,
      items: [
        { text: '🟠 Climber', link: '/guide/Who/Climber' },
        { text: '🟩 Spectator', link: '/guide/Who/Spectator' },
        { text: '💜 Coach', link: '/guide/Who/Coach' },
        { text: '🟩 Setter', link: '/guide/Who/Setter' },
        { text: '🟩 Gym', link: '/guide/Who/Gym' },
        { text: '🟠 Gear Company', link: '/guide/Who/GearCompany' },
        { text: '💜 Journalist', link: '/guide/Who/Journalist' },
        
      ]
    },
    {
      text: 'Where ❔',
      collapsed: true,
      items: [
        { text: 'Where can a BetaComp occur?', link: '/guide/Where/WhereBetaComp' },
      ]
    },
    {
      text: 'How ❔',
      collapsed: true,
      items: [
        { text: 'How to run a BetaComp?', link: '/guide/How/HowRunBetaComp' },
        {
          text: 'Mimic Other Sports',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/development/OtherSport/Overview' },
            { text: 'Breaking', link: '/development/OtherSport/Breaking' },
            { text: 'Skiing', link: '/development/OtherSport/Skiing' },
            { text: 'Skateboarding', link: '/development/OtherSport/Skateboarding' },
            { text: 'Gymnastics', link: '/development/OtherSport/Gymnastics' },
          ]
        },
      ]
    },
    { text: 'Go to Reference', link: '/reference/ReferenceOverview' }

  ]
}

function sidebarReference() {
  return [
    { text: 'Go to Guide', link: '/guide/What/WhatKlimbeta' },
    {
      text: '🔷 Beta',
      collapsed: true,
      items: [
        { text: '❔🔷 What is the Beta System?', link: '/reference/Beta/WhatBetaSystem' },
        { text: '🔷🔷 What is TeamBeta?', link: '/reference/Beta/WhatTeamBeta' },
        { text: '💬 Beta Example', link: '/reference/Beta/BetaExamples' },

        {
          text: '🔷 Beta Actions',
          collapsed: true,
          items: [
            { text: '❔🔷 What are Beta Actions?', link: '/reference/Beta/BetaAction/Overview' },
            { text: '🔷 AskBeta', link: '/reference/Beta/BetaAction/AskBeta' },
            { text: '🔷 ChangeBeta', link: '/reference/Beta/BetaAction/ChangeBeta' },
            { text: '🔷 GetBeta', link: '/reference/Beta/BetaAction/GetBeta' },
            { text: '🔷 GiveBeta', link: '/reference/Beta/BetaAction/GiveBeta' },
            { text: '🔷 LinkBeta', link: '/reference/Beta/BetaAction/LinkBeta' },
            { text: '🔷 MimeBeta', link: '/reference/Beta/BetaAction/MimeBeta' },
            { text: '🔷 ParseBeta', link: '/reference/Beta/BetaAction/ParseBeta' },
            { text: '🔷 PerformBeta', link: '/reference/Beta/BetaAction/PerformBeta' },
            { text: '🔷 PlantBeta', link: '/reference/Beta/BetaAction/PlantBeta' },
            { text: '🔷 ReadBeta', link: '/reference/Beta/BetaAction/ReadBeta' },
            { text: '🔷 RecordBeta', link: '/reference/Beta/BetaAction/RecordBeta' },
            { text: '🔷 SprayBeta', link: '/reference/Beta/BetaAction/SprayBeta' },
            { text: '🔷 TestBeta', link: '/reference/Beta/BetaAction/TestBeta' },
          ]
        },
        {
          text: '🔷🔷🔷 Beta Sequence',
          collapsed: true,
          items: [
            { text: '❔🔷 What is a Beta Sequence?', link: '/reference/Beta/BetaSequence/Overview' }
          ]
        },
      ]
    },
    {
      text: '🟠 Move',
      collapsed: true,
      items: [
        { text: '❔🟠 What is Move?', link: '/reference/Move/MoveOverview' },
        {
          text: '🟠 BodyMove',
          collapsed: true,
          items: [
            { text: '❔🟠 What is BodyMove?', link: '/reference/Move/BodyMove/Overview' },
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
            { text: '❔🟠 What is ArmMove?', link: '/reference/Move/ArmMove/Overview' },
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
            { text: '❔🟠 What is Move?', link: '/reference/Move/HandMove/Overview' },
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
            { text: '❔🟠 What is LegMove?', link: '/reference/Move/LegMove/Overview' },
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
            { text: '❔🟠 What is FootMove?', link: '/reference/Move/FootMove/Overview' },
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
            { text: '❔🟠 What is ToolMove?', link: '/reference/Move/ToolMove/Overview' },
            { text: '🟠 BoltMove', link: '/reference/Move/ToolMove/BoltMove' },
            { text: '🟠 CarabinerMove', link: '/reference/Move/ToolMove/CarabinerMove' },
            { text: '🟠 ChalkMove', link: '/reference/Move/ToolMove/ChalkMove' },
            { text: '🟠 EtrierMove', link: '/reference/Move/ToolMove/EtrierMove' },
            { text: '🟠 QuickdrawMove', link: '/reference/Move/ToolMove/QuickdrawMove' },
            { text: '🟠 RopeMove', link: '/reference/Move/ToolMove/RopeMove' },
            { text: '🟠 ShoeMove', link: '/reference/Move/ToolMove/ShoeMove' },
          ]
        },
        {
          text: '🟠🟠🟠 Move Sequence',
          collapsed: true,
          items: [
            { text: '❔🟠 What is MoveSequence?', link: '/reference/Move/MoveSequence/Overview' }
          ]
        },
        {
          text: '🟠🟠 Move Difficulty',
          collapsed: true,
          items: [
            { text: '❔🟠 Overview', link: '/reference/Move/MoveDifficulty/Overview' },
            { text: '❔🟠 Move Complexity', link: '/reference/Move/MoveDifficulty/MoveComplexity' },
            { text: '❔🟠 Move Intensity', link: '/reference/Move/MoveDifficulty/MoveIntensity' },
            { text: '❔🟠 Move Risk', link: '/reference/Move/MoveDifficulty/MoveRisk' },
          ]
        },
      ]
    },
    {
      text: '🔺 Route',
      collapsed: true,
      items: [
        { text: '❔🔺 What is Route?', link: '/reference/Route/RouteOverview' },

        {
          text: '🔺 Route Surface',
          collapsed: true,
          items: [
            { text: '🔺 Overview', link: '/reference/Route/RouteSurface/Overview' },
          ]
        },
        {
          text: '🔺 Route Line',
          collapsed: true,
          items: [
            { text: '🔺 Overview', link: '/reference/Route/RouteLine/Overview' },
            { text: '🔺 AroundLine', link: '/reference/Route/RouteLine/AroundLine' },
            { text: '🔺 CircuitLine', link: '/reference/Route/RouteLine/CircuitLine' },
            { text: '🔺 PerimeterLine', link: '/reference/Route/RouteLine/PerimeterLine' },
            { text: '🔺 SpiralLine', link: '/reference/Route/RouteLine/SpiralLine' },
            { text: '🔺 StaightLine', link: '/reference/Route/RouteLine/StaightLine' },
            { text: '🔺 ZigzagLine', link: '/reference/Route/RouteLine/ZigzagLine' },
          ]
        },
        {
          text: '🔺 RoutePoint', collapsed: true, items: [
            { text: '🔺 Overview', link: '/reference/Route/RoutePoint/Overview' },
            { text: '🔺 CenterPoint', link: '/reference/Route/RoutePoint/CenterPoint' },
            { text: '🔺 Midpoint', link: '/reference/Route/RoutePoint/Midpoint' },
            { text: '🔺 ReferencePoint', link: '/reference/Route/RoutePoint/ReferencePoint' },
            { text: '🔺 ReflectionPoint', link: '/reference/Route/RoutePoint/ReflectionPoint' },
            { text: '🔺 TargetPoint', link: '/reference/Route/RoutePoint/TargetPoint' },

          ]
        },
        {
          text: '🔺 Route Space',
          collapsed: true,
          items: [
            { text: '🔺 Overview', link: '/reference/Route/RouteSpace/Overview' },
          ]
        },
        {
          text: '🔺🔺🔺 Route Sequence',
          collapsed: true,
          items: [
            { text: '❔🔺 What is a Route Sequence?', link: '/reference/Route/RouteSequence/Overview' }
          ]
        },
        {
          text: '🔺🔺 Route Difficulty',
          collapsed: true,
          items: [
            { text: '❔🔺 Overview', link: '/reference/Route/RouteDifficulty/Overview' },
            { text: '❔🔺 Route Complexity', link: '/reference/Route/RouteDifficulty/RouteComplexity' },
            { text: '❔🔺 Route Intensity', link: '/reference/Route/RouteDifficulty/RouteIntensity' },
            { text: '❔🔺 Route Risk', link: '/reference/Route/RouteDifficulty/RouteRisk' },
          ]
        },
      ]
    },
    {
      text: '🟩 Environment',
      collapsed: true,
      items: [
        { text: '❔🟩 What is Environment?', link: '/reference/Environment/EnvironmentOverview' },
        {
          text: '🟩 EnvironmentSurface',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/EnvironmentSurface/Overview' },
            { text: '🟩 Vegetation', link: '/reference/Environment/EnvironmentSurface/Vegetation' },
          ]
        },
        {
          text: '🟩 EnvironmentSpace',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/EnvironmentSpace/Overview' },
            { text: '🟩 Atmosphere', link: '/reference/Environment/EnvironmentSpace/Atmosphere' },
            { text: '🟩 Music', link: '/reference/Environment/EnvironmentSpace/Music' },
            { text: '🟩 Spectator', link: '/reference/Environment/EnvironmentSpace/Spectator' },
          ]
        },
        {
          text: '🟩 EnvironmentLine',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/EnvironmentLine/Overview' },
          ]
        },
        {
          text: '🟩 FallProtection',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/FallProtection/Overview' },
            { text: '🟩 Autobelay', link: '/reference/Environment/FallProtection/Autobelay' },
            { text: '🟩 Belayer', link: '/reference/Environment/FallProtection/Belayer' },
            { text: '🟩 Bolted', link: '/reference/Environment/FallProtection/Bolted' },
            { text: '🟩 Matting', link: '/reference/Environment/FallProtection/Matting' },
            { text: '🟩 Spotter', link: '/reference/Environment/FallProtection/Spotter' },
            { text: '🟩 Top Rope', link: '/reference/Environment/FallProtection/TopRope' },
          ]
        },
        {
          text: '🟩 Wall',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/Wall/Overview' },
            { text: '🟩 BetaWall', link: '/reference/Environment/Wall/BetaWall' },
            { text: '🟩 CrackWall', link: '/reference/Environment/Wall/CrackWall' },
          ]
        },
        {
          text: '🟩 Module',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/Module/Overview' }
          ]
        },
        {
          text: '🟩 Macro',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/Macro/Overview' }
          ]
        },
        {
          text: '🟩 Hold',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/Hold/Overview' }
          ]
        },
        {
          text: '🟩🟩🟩 Environment Sequence',
          collapsed: true,
          items: [
            { text: '❔🟩 What is a Environment Sequence?', link: '/reference/Environment/EnvironmentSequence/Overview' },
          ]
        },
        {
          text: '🟩🟩🟩 Environment Sequence',
          collapsed: true,
          items: [
            { text: '🟩 Overview', link: '/reference/Environment/EnvironmentDifficulty/Overview' },
            { text: '🟩 Environment Complexity', link: '/reference/Environment/EnvironmentDifficulty/EnvironmentComplexity' },
            { text: '🟩 Environment Intensity', link: '/reference/Environment/EnvironmentDifficulty/EnvironmentIntensity' },
            { text: '🟩 Environment Risk', link: '/reference/Environment/EnvironmentDifficulty/EnvironmentRisk' },
          ]
        },
      ]
    },
    {
      text: ' 💜 Neuro',
      collapsed: true,
      items: [
        { text: '❔💜 What is Neuro?', link: '/reference/Neuro/NeuroOverview' },

        { text: '💜 Alignment', link: '/reference/Neuro/Alignment' },
        { text: '💜 Attention', link: '/reference/Neuro/Attention' },
        { text: '💜 Awareness', link: '/reference/Neuro/Awareness' },
        { text: '💜 CognitiveEase', link: '/reference/Neuro/CognitiveEase' },
        { text: '💜 Counting', link: '/reference/Neuro/Counting' },
        { text: '💜 Decision', link: '/reference/Neuro/Decision' },
        { text: '💜 Energy', link: '/reference/Neuro/Energy' },
        { text: '💜 Estimation', link: '/reference/Neuro/Estimation' },
        { text: '💜 Event', link: '/reference/Neuro/Event' },
        { text: '💜 Judgement', link: '/reference/Neuro/Judgement' },
        { text: '💜 Learning', link: '/reference/Neuro/Learning' },
        { text: '💜 Listening', link: '/reference/Neuro/Listening' },
        { text: '💜 Memory', link: '/reference/Neuro/Memory' },
        { text: '💜 Music', link: '/reference/Neuro/Music' },
        { text: '💜 Proprioception', link: '/reference/Neuro/Proprioception' },
        { text: '💜 Spatial Reasoning', link: '/reference/Neuro/SpatialReasoning' },
        { text: '💜 Thermoception', link: '/reference/Neuro/Thermoception' },
        { text: '💜 Time', link: '/reference/Neuro/Time' },
        { text: '💜 Vision', link: '/reference/Neuro/Vision' },
        {
          text: ' 💜💜💜 Neuro Sequence',
          collapsed: true,
          items: [
            { text: '❔💜 What is a Neuro Sequence?', link: '/reference/Neuro/NeuroSequence/Overview' }
          ]
        },

      ]
    },

    { text: '📷 Gallery', link: '/reference/Gallery/Overview' },
    { text: '📖 Glossary', link: '/reference/Glossary' },
    { text: 'Go to Officials', link: '/officials/OfficialsOverview' },

  ]
}

function sidebarTests() {
  return [
    {
      text: 'Beta Tests',
      collapsed: true,
      items: [
        { text: 'Beta Naming', link: '/tests/BetaTests/BetaNameTest' },
        { text: 'Beta Crossword', link: '/tests/BetaTests/BetaCrosswordTest' },
        { text: 'Beta Labelling', link: '/tests/BetaTests/BetaLabelTest' },
        { text: 'Beta Mimicry', link: '/tests/BetaTests/BetaMimicryTest' },
        { text: 'Beta Ordering', link: '/tests/BetaTests/BetaOrderByTest' },
        { text: 'Beta Grouping', link: '/tests/BetaTests/BetaGroupByTest' },
        { text: 'Beta Accuracy', link: '/tests/BetaTests/BetaAccuracyTest' },
        { text: 'Beta Speed', link: '/tests/BetaTests/BetaSpeedTest' },

      ]
    },
    {
      text: 'Move Tests',
      collapsed: true,
      items: [
        { text: 'Move Naming', link: '/tests/MoveTests/MoveNameTest' },
        { text: 'Move Crossword', link: '/tests/MoveTests/MoveCrosswordTest' },
        { text: 'Move Labelling', link: '/tests/MoveTests/MoveLabelTest' },
        { text: 'Move Mimicing', link: '/tests/MoveTests/MoveMimicryTest' },
        { text: 'Move Ordering', link: '/tests/MoveTests/MoveOrderByTest' },
        { text: 'Move Grouping', link: '/tests/MoveTests/MoveGroupByTest' },
      ]
    },
    {
      text: 'Route Tests',
      collapsed: true,
      items: [
        { text: 'Route Naming', link: '/tests/RouteTests/RouteNameTest' },
        { text: 'Route Crossword', link: '/tests/RouteTests/RouteCrosswordTest' },
        { text: 'Route Labelling', link: '/tests/RouteTests/RouteLabelTest' },
        { text: 'Route Mimicing', link: '/tests/RouteTests/RouteMimicryTest' },
        { text: 'Route Ordering', link: '/tests/RouteTests/RouteOrderByTest' },
        { text: 'Route Grouping', link: '/tests/RouteTests/RouteGroupByTest' },
      ]
    },
    {
      text: 'Environment Tests',
      collapsed: true,
      items: [
        { text: 'Environment Naming', link: '/tests/EnvironmentTests/EnvironmentNameTest' },
        { text: 'Environment Crossword', link: '/tests/EnvironmentTests/EnvironmentCrosswordTest' },
        { text: 'Environment Labelling', link: '/tests/EnvironmentTests/EnvironmentLabelTest' },
        { text: 'Environment Mimicing', link: '/tests/EnvironmentTests/EnvironmentMimicryTest' },
        { text: 'Environment Ordering', link: '/tests/EnvironmentTests/EnvironmentOrderByTest' },
        { text: 'Environment Grouping', link: '/tests/EnvironmentTests/EnvironmentGroupByTest' },
      ]
    },
    {
      text: 'Neuro Tests',
      collapsed: true,
      items: [
        { text: 'Neuro Naming', link: '/tests/NeuroTests/NeuroNameTest' },
        { text: 'Neuro Crossword', link: '/tests/NeuroTests/NeuroCrosswordTest' },
        { text: 'Neuro Labelling', link: '/tests/NeuroTests/NeuroLabelTest' },
        { text: 'Neuro Mimicing', link: '/tests/NeuroTests/NeuroMimicryTest' },
        { text: 'Neuro Ordering', link: '/tests/NeuroTests/NeuroOrderByTest' },
        { text: 'Neuro Grouping', link: '/tests/NeuroTests/NeuroGroupByTest' },
      ]
    },
    {
      text: 'Score Tests',
      collapsed: true,
      items: [
        { text: 'Score Naming', link: '/tests/ScoreTests/ScoreNameTest' },
        { text: 'Score Crossword', link: '/tests/ScoreTests/ScoreCrosswordTest' },
        { text: 'Score Labelling', link: '/tests/ScoreTests/ScoreLabelTest' },
        { text: 'Score Mimicing', link: '/tests/ScoreTests/ScoreMimicryTest' },
        { text: 'Score Ordering', link: '/tests/ScoreTests/ScoreOrderByTest' },
        { text: 'Score Grouping', link: '/tests/ScoreTests/ScoreGroupByTest' },
        { text: 'Score Accuracy', link: '/tests/ScoreTests/ScoreAccuracyTest' },
        { text: 'Score Speed', link: '/tests/ScoreTests/ScoreSpeedTest' },

      ]
    },
    { text: 'Go to Development', link: '/development/DevelopmentOverview' },
  ]
}

function sidebarDevelopment() {
  return [
    { text: 'Overview', link: '/development/DevelopmentOverview' },
    { text: 'About', link: '/development/About' },
    { text: '✉ Contact', link: '/development/Contact' },
    { text: '👩‍💻 Coding', link: '/development/Coding' },
    { text: '🔥 DevilsAdvocate', link: '/development/DevilsAdvocate' },
    { text: '📎 Downloads', link: '/development/Downloads' },
    { text: '❔ Research Questions', link: '/development/ResearchQuestions' },
    { text: '🕸 Element Relationship Diagram', link: '/development/ElementRelationshipDiagram' },
    { text: 'Poster', link: '/development/Poster' },

    { text: '🔷 Roadmap', link: '/development/Roadmap' },
    { text: '☑ ToDo', link: '/development/ToDo' },
    {
      text: '🔁 Copy Other Sports',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/development/OtherSport/Overview' },
        { text: '🔁 Breaking', link: '/development/OtherSport/Breaking' },
        { text: '🔁 Gymnastics', link: '/development/OtherSport/Gymnastics' },
        { text: '🔁 Parkour', link: '/development/OtherSport/Parkour' },
        { text: '🔁 Skiing', link: '/development/OtherSport/Skiing' },
        { text: '🔁 Skateboarding', link: '/development/OtherSport/Skateboarding' },
        { text: '🔁 Trampoline', link: '/development/OtherSport/Trampoline' },

      ]
    },
    { text: 'Go to Sponsor', link: '/Sponsor/Sponsor' },
  ]
}

function sidebarBetaComp() {
  return [

    { text: '🔷 Overview', link: '/betacomp/WhatBetaComp' },
    { text: '🔺 BetaRoute', link: '/betacomp/BetaRoute' },
    { text: '🟩 BetaWall', link: '/betacomp/BetaWall' },
    { text: '🔷🔷 BetaBattle', link: '/betacomp/BetaBattle' },
    { text: '💬 ForcedBeta', link: '/betacomp/ForcedBeta' },
    { text: '🛠 BetaBauen', link: '/betacomp/BetaBauen' },
    { text: '🟠 BetaDance', link: '/betacomp/BetaDance' },
    { text: '🔷 TeamBeta', link: '/betacomp/TeamBeta' },
    {
      text: '🔷 BetaScore',
      collapsed: true,
      items: [
        { text: '🔷 BetaScore Overview', link: '/betacomp/Score/Overview' },
        {
          text: '🔷 Difficulty Score',
          collapsed: true,
          items: [
            { text: '🔷 Overview', link: '/betacomp/Score/DifficultyScore/Overview' },
            {
              text: '🔷 Beta Difficulty Score',
              collapsed: true,
              items: [
                { text: '🔷 Overview', link: '/betacomp/Score/DifficultyScore/BetaDifficultyScore/Overview' },
                { text: '🔷 Beta Risk Score', link: '/betacomp/Score/DifficultyScore/BetaDifficultyScore/BetaRiskScore' },
                { text: '🔷 Beta Intensity Score', link: '/betacomp/Score/DifficultyScore/BetaDifficultyScore/BetaIntensityScore' },
                { text: '🔷 Beta Complexity Score', link: '/betacomp/Score/DifficultyScore/BetaDifficultyScore/BetaComplexityScore' },

              ]
            },
            {
              text: '🔷🟠 Move Difficulty Score',
              collapsed: true,
              items: [
                { text: '🔷🟠 Overview', link: '/betacomp/Score/DifficultyScore/MoveDifficultyScore/Overview' },
                { text: '🔷🟠 Move Risk Score', link: '/betacomp/Score/DifficultyScore/MoveDifficultyScore/MoveRiskScore' },
                { text: '🔷🟠 Move Intensity Score', link: '/betacomp/Score/DifficultyScore/MoveDifficultyScore/MoveIntensityScore' },
                { text: '🔷🟠 Move Complexity Score', link: '/betacomp/Score/DifficultyScore/MoveDifficultyScore/MoveComplexityScore' },
              ]
            },
            {
              text: '🔷🔺 Route Difficulty Score',
              collapsed: true,
              items: [
                { text: '🔷🔺 Overview', link: '/betacomp/Score/DifficultyScore/RouteDifficulty/Overview' },
                { text: '🔷🔺 Route Risk Score', link: '/betacomp/Score/DifficultyScore/RouteDifficultyScore/RouteRiskScore' },
                { text: '🔷🔺 Route Intensity Score', link: '/betacomp/Score/DifficultyScore/RouteDifficultyScore/RouteIntensityScore' },
                { text: '🔷🔺 Route Complexity Score', link: '/betacomp/Score/DifficultyScore/RouteDifficultyScore/RouteComplexityScore' },
              ]
            },
            {
              text: '🔷🟩 Environment Difficulty Score',
              collapsed: true,
              items: [
                { text: '🔷🟩 Overview', link: '/betacomp/Score/DifficultyScore/EnvironmentDifficultyScore/Overview' },
                { text: '🔷🟩 Environment Risk', link: '/betacomp/Score/DifficultyScore/EnvironmentDifficultyScore/EnvironmentRiskScore' },
                { text: '🔷🟩 Environment Intensity', link: '/betacomp/Score/DifficultyScore/EnvironmentDifficultyScore/EnvironmentIntensityScore' },
                { text: '🔷🟩 Environment Complexity', link: '/betacomp/Score/DifficultyScore/EnvironmentDifficultyScore/EnvironmentComplexityScore' },
              ]
            },
          ]
        },
        {
          text: '🔷 Execution Score',
          collapsed: true,
          items: [
            { text: '🔷 Overview', link: '/betacomp/Score/ExecutionScore/Overview' },
            { text: '🔷🟠 Move Execution Score', link: '/betacomp/Score/ExecutionScore/MoveExecutionScore' },
            { text: '🔷🔺 Route Execution Score', link: '/betacomp/Score/ExecutionScore/RouteExecutionScore' },
            { text: '🔷🟩 Environment Execution Score', link: '/betacomp/Score/ExecutionScore/EnvironmentExecutionScore' },

          ]
        },
        {
          text: '🔷 Composition Score',
          collapsed: true,
          items: [
            { text: '🔷 Overview', link: '/betacomp/Score/CompositionScore/Overview' },
            { text: '🔷🟠 Move Composition', link: '/betacomp/Score/CompositionScore/MoveCompositionScore' },
            { text: '🔷🔺 Route Composition', link: '/betacomp/Score/CompositionScore/RouteCompositionScore' },
          ]
        },
      ]
    },
    {
      text: ' Officials',
      collapsed: true,
      items: [
        {
          text: '🎤 Announcer',
          collapsed: true,
          items: [
            { text: '🎤 Overview', link: '/officials/Judge/JudgingOverview' },
    
          ]
        },
        {
          text: '🎙 Commentator',
          collapsed: true,
          items: [
            { text: '🎙 Overview', link: '/officials/Commentator/Overview' },
    
          ]
        },
        {
          text: '⚖ Judge',
          collapsed: true,
          items: [
            { text: '⚖ Overview', link: '/officials/Judge/JudgingOverview' },
            { text: '⚖ Become a Judge', link: '/officials/Judge/HowBecomeJudge' },
            { text: '⚖ Educate Judges', link: '/officials/Judge/HowEducateJudge' },
            { text: '⚖ Recruit Judges', link: '/officials/Judge/HowRecruitJudge' },
            { text: '⚖ Set Up Judging Area', link: '/officials/Judge/JudgingAreaSetUp' },
            { text: '⚖ Rules', link: '/officials/Judge/Rules' },
            { text: '⚖ Judging Process', link: '/officials/Judge/JudgingProcess' },
            { text: '⚖ Beta Scoring App', link: '/officials/Judge/BetaScoreApp' },
            { text: '⚖ Contingency Plans', link: '/officials/Judge/ContingencyPlans' },
          ]
        },
        {
          text: '📝 Registrar',
          collapsed: true,
          items: [
            { text: '📝 Overview', link: '/officials/Registrar/Overview' },
    
          ]
        },
        {
          text: '🔧 Setter',
          collapsed: true,
          items: [
            { text: '🔧 Overview', link: '/officials/Setter/Overview' },
            { text: '🔧 Chief Setter', link: '/officials/Setter/ChiefSetter' },
            { text: '🔧 Apprentise Setter', link: '/officials/Setter/ApprentiseSetter' },
            { text: '🔧 Technician', link: '/officials/Setter/Technician' },
          ]
        },
        {
          text: '🔌 Technologist',
          collapsed: true,
          items: [
            { text: '🔌 Overview', link: '/officials/Technologist/Overview' },
          ]
        },
      ]
    },

    { text: 'Go to Tests', link: '/tests/TestsOverview' },
  ]
}
