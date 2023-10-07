import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BetaComp",
  description: "The Development of a New Climbing Olympic Event",
  base: '/BetaComp/',
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
      message: '<a href="https://klimbeta.github.io/BetaComp/development/Contact">Contact</a>',
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
      '/judging/': sidebarJudging(),
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
      text: 'Judging',
      link: '/judging/JudgingOverview',
      activeMatch: '/judging/'
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
    // {
    //   text: 'About',
    //   link: '/about/About',
    //   activeMatch: '/about/'
    // },
    {
      text: 'Sponsor',
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
        { text: '🔷 What is Beta?', link: '/guide/What/WhatBeta' },
        { text: '🔷 What is a BetaComp?', link: '/guide/What/WhatBetaComp' },
        { text: '🔷 What is this BetaComp Website?', link: '/guide/What/WhatBetaCompWebsite' },
        
      ]
    },
    {
      text: 'Why ❔',
      collapsed: true,
      items: [
        { text: '❔ How does BetaComp add Value to Climbers?', link: '/guide/Why/AddValue' },

      ]
    },
    {
      text: 'Who ❔',
      collapsed: true,
      items: [
        { text: 'Climber', link: '/guide/Who/Climber' },
        { text: 'Spectator', link: '/guide/Who/Spectator' },
        { text: 'Coach', link: '/guide/Who/Coach' },
        { text: 'Setter', link: '/guide/Who/Setter' },
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
    { text: 'Go to Guide', link: '/guide/What/WhatBetaComp' },
    {
      text: '🔷 Competition Types',
      collapsed: true,
      items: [
        { text: '🔷 Overview', link: '/reference/CompType/Overview' },
        { text: '🔺 BetaRoute', link: '/reference/CompType/BetaRoute' },
        { text: '🟩 BetaWall', link: '/reference/CompType/BetaWall' },
        { text: '🔷 BetaBattle', link: '/reference/CompType/BetaBattle' },
        { text: '🔷 ForcedBeta', link: '/reference/CompType/ForcedBeta' },
        { text: '🔷 MetaBetaComp', link: '/reference/CompType/MetaBetaComp' },
        { text: '🎵 BetaDance', link: '/reference/CompType/BetaDance' },
        { text: '🔷 TeamBeta', link: '/reference/CompType/TeamBeta' },

      ]
    },
    {
      text: '🔷 BetaScore',
      collapsed: true,
      items: [
        { text: '🔷 BetaScore Overview', link: '/reference/Scoring/Overview' },
        {
          text: '🔷 Difficulty Score',
          collapsed: true,
          items: [
            { text: '🔷 Overview', link: '/reference/Scoring/Difficulty/Overview' },
            {
              text: '🔷 Beta Difficulty',
              collapsed: true,
              items: [
                { text: '🔷 Overview', link: '/reference/Scoring/Difficulty/BetaDifficulty/Overview' },
                { text: '🔷 Beta Risk', link: '/reference/Scoring/Difficulty/BetaDifficulty/BetaRisk' },
                { text: '🔷 Beta Intensity', link: '/reference/Scoring/Difficulty/BetaDifficulty/BetaIntensity' },
                { text: '🔷 Beta Complexity', link: '/reference/Scoring/Difficulty/BetaDifficulty/BetaComplexity' },

              ]
            },
            {
              text: '🔷🟠 Move Difficulty',
              collapsed: true,
              items: [
                { text: '🔷🟠 Overview', link: '/reference/Scoring/Difficulty/MoveDifficulty/Overview' },
                { text: '🔷🟠 Move Risk', link: '/reference/Scoring/Difficulty/MoveDifficulty/MoveRisk' },
                { text: '🔷🟠 Move Intensity', link: '/reference/Scoring/Difficulty/MoveDifficulty/MoveIntensity' },
                { text: '🔷🟠 Move Complexity', link: '/reference/Scoring/Difficulty/MoveDifficulty/MoveComplexity' },
              ]
            },
            {
              text: '🔷🔺 Route Difficulty',
              collapsed: true,
              items: [
                { text: '🔷🔺 Overview', link: '/reference/Scoring/Difficulty/RouteDifficulty/Overview' },
                { text: '🔷🔺 Route Risk', link: '/reference/Scoring/Difficulty/RouteDifficulty/RouteRisk' },
                { text: '🔷🔺 Route Intensity', link: '/reference/Scoring/Difficulty/RouteDifficulty/RouteIntensity' },
                { text: '🔷🔺 Route Complexity', link: '/reference/Scoring/Difficulty/RouteDifficulty/RouteComplexity' },
              ]
            },
            {
              text: '🔷🟩 Environment Difficulty',
              collapsed: true,
              items: [
                { text: '🔷🟩 Overview', link: '/reference/Scoring/Difficulty/EnvironmentDifficulty/Overview' },
                { text: '🔷🟩 Environment Risk', link: '/reference/Scoring/Difficulty/EnvironmentDifficulty/EnvironmentRisk' },
                { text: '🔷🟩 Environment Intensity', link: '/reference/Scoring/Difficulty/EnvironmentDifficulty/EnvironmentIntensity' },
                { text: '🔷🟩 Environment Complexity', link: '/reference/Scoring/Difficulty/EnvironmentDifficulty/EnvironmentComplexity' },
              ]
            },
          ]
        },
        {
          text: '🔷 Execution Score',
          collapsed: true,
          items: [
            { text: '🔷 Overview', link: '/reference/Scoring/Execution/Overview' },
            { text: '🔷🟠 Move Execution', link: '/reference/Scoring/Execution/MoveExecution' },
            { text: '🔷🔺 Route Execution', link: '/reference/Scoring/Execution/RouteExecution' },
            { text: '🔷🟩 Environment Execution', link: '/reference/Scoring/Execution/EnvironmentExecution' },

          ]
        },
        {
          text: '🔷 Composition Score',
          collapsed: true,
          items: [
            { text: '🔷 Overview', link: '/reference/Scoring/Composition/Overview' },
            { text: '🔷🟠 Move Composition', link: '/reference/Scoring/Composition/MoveComposition' },
            { text: '🔷🔺 Route Composition', link: '/reference/Scoring/Composition/RouteComposition' },
          ]
        },
      ]
    },

    {
      text: '🔷 Beta',
      collapsed: true,
      items: [
        { text: '❔ What is the Beta System?', link: '/reference/Beta/WhatBetaSystem' },
        { text: '💬 Beta Example', link: '/reference/Beta/BetaExamples' },

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
        {
          text: '🔷🔷🔷 Beta Sequence',
          collapsed: true,
          items: [
            { text: '❔ What is a Beta Sequence?', link: '/reference/Beta/BetaSequence/Overview' }
          ]
        },
      ]
    },
    {
      text: '🟠 Move',
      collapsed: true,
      items: [
        { text: '❔ What is Move?', link: '/reference/Move/MoveOverview' },
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
            { text: '❔ What is FootMove?', link: '/reference/Move/FootMove/Overview' },
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
            { text: '❔ What is ToolMove?', link: '/reference/Move/ToolMove/Overview' },
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
            { text: '❔ What is MoveSequence?', link: '/reference/Move/MoveSequence/Overview' }
          ]
        },
      ]
    },
    {
      text: '🔺 Route',
      collapsed: true,
      items: [
        { text: '❔ What is Route?', link: '/reference/Route/RouteOverview' },

        {
          text: '🔺 Route Surface',
          collapsed: true,
          items: [
            { text: '🔺 Overview', link: '/reference/Route/RouteSurface/Overview' },
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
          text: '🔺🔺🔺 Route Sequence',
          collapsed: true,
          items: [
            { text: '❔ What is a Route Sequence?', link: '/reference/Route/RouteSequence/Overview' }
          ]
        },
      ]
    },
    {
      text: '🟩 Environment',
      collapsed: true,
      items: [
        { text: '❔ What is Environment?', link: '/reference/Environment/EnvironmentOverview' },
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
            { text: '❔ What is a Environment Sequence?', link: '/reference/Environment/EnvironmentSequence/Overview' },
          ]
        },
      ]
    },
    {
      text: ' 💜 Neuro',
      collapsed: true,
      items: [
        { text: '❔ What is Neuro?', link: '/reference/Neuro/NeuroOverview' },

        { text: '💜 Alignment', link: '/reference/Neuro/Alignment' },
        { text: '💜 Attention', link: '/reference/Neuro/Attention' },
        { text: '💜 Awareness', link: '/reference/Neuro/Awareness' },
        { text: '💜 Counting', link: '/reference/Neuro/Counting' },
        { text: '💜 Decision', link: '/reference/Neuro/Decision' },
        { text: '💜 Energy', link: '/reference/Neuro/Energy' },
        { text: '💜 Estimation', link: '/reference/Neuro/Estimation' },
        { text: '💜 Event', link: '/reference/Neuro/Event' },
        { text: '💜 Listening', link: '/reference/Neuro/Listening' },
        { text: '💜 Memory', link: '/reference/Neuro/Memory' },
        { text: '💜 Music', link: '/reference/Neuro/Music' },
        { text: '💜 Proprioception', link: '/reference/Neuro/Proprioception' },
        { text: '💜 Thermoception', link: '/reference/Neuro/Thermoception' },
        { text: '💜 Time', link: '/reference/Neuro/Time' },
        { text: '💜 Vision', link: '/reference/Neuro/Vision' },
        {
          text: ' 💜💜💜 Neuro Sequence',
          collapsed: true,
          items: [
            { text: '❔ What is a Neuro Sequence?', link: '/reference/Neuro/NeuroSequence/Overview' }
          ]
        },

      ]
    },

    { text: 'Gallery', link: '/reference/Gallery/Gallery' },
    { text: 'Glossary', link: '/reference/Glossary/Glossary' }

  ]
}

function sidebarTests() {
  return [
    {
      text: 'Beta Tests',
      collapsed: true,
      items: [
        { text: 'Beta Test 01', link: '/tests/TestsOverview' },
        { text: 'Beta Test 02', link: '/tests/TestsOverview' },
        { text: 'Beta Test 03', link: '/tests/TestsOverview' },
        { text: 'Beta Test 04', link: '/tests/TestsOverview' },
        { text: 'Beta Test 05', link: '/tests/TestsOverview' },
        { text: 'Beta Test 06', link: '/tests/TestsOverview' },
        { text: 'Beta Test 07', link: '/tests/TestsOverview' },

      ]
    },
    {
      text: 'Move Tests',
      collapsed: true,
      items: [
        { text: 'Move Test 01', link: '/tests/TestsOverview' },
        { text: 'Move Test 02', link: '/tests/TestsOverview' },
        { text: 'Move Test 03', link: '/tests/TestsOverview' },
        { text: 'Move Test 04', link: '/tests/TestsOverview' },
        { text: 'Move Test 05', link: '/tests/TestsOverview' },
        { text: 'Move Test 06', link: '/tests/TestsOverview' },
        { text: 'Move Test 07', link: '/tests/TestsOverview' },
      ]
    },
    {
      text: 'Route Tests',
      collapsed: true,
      items: [
        { text: 'Route Test 01', link: '/tests/TestsOverview' },
        { text: 'Route Test 02', link: '/tests/TestsOverview' },
        { text: 'Route Test 03', link: '/tests/TestsOverview' },
        { text: 'Route Test 04', link: '/tests/TestsOverview' },
        { text: 'Route Test 05', link: '/tests/TestsOverview' },
        { text: 'Route Test 06', link: '/tests/TestsOverview' },
        { text: 'Route Test 07', link: '/tests/TestsOverview' },
      ]
    },
    {
      text: 'Environment Tests',
      collapsed: true,
      items: [
        { text: 'Environment Test 01', link: '/tests/TestsOverview' },
        { text: 'Environment Test 02', link: '/tests/TestsOverview' },
        { text: 'Environment Test 03', link: '/tests/TestsOverview' },
        { text: 'Environment Test 04', link: '/tests/TestsOverview' },
        { text: 'Environment Test 05', link: '/tests/TestsOverview' },
        { text: 'Environment Test 06', link: '/tests/TestsOverview' },
        { text: 'Environment Test 07', link: '/tests/TestsOverview' },
      ]
    },
    {
      text: 'Neuro Tests',
      collapsed: true,
      items: [
        { text: 'Neuro Test 01', link: '/tests/TestsOverview' },
        { text: 'Neuro Test 02', link: '/tests/TestsOverview' },
        { text: 'Neuro Test 03', link: '/tests/TestsOverview' },
        { text: 'Neuro Test 04', link: '/tests/TestsOverview' },
        { text: 'Neuro Test 05', link: '/tests/TestsOverview' },
        { text: 'Neuro Test 06', link: '/tests/TestsOverview' },
        { text: 'Neuro Test 07', link: '/tests/TestsOverview' },
      ]
    }
  ]
}

function sidebarDevelopment() {
  return [
    { text: 'Overview', link: '/development/DevelopmentOverview' },
    { text: '✉ Contact', link: '/development/Development/Contact' },
    { text: '👩‍💻 Coding', link: '/development/Coding' },
    { text: '🔥 DevilsAdvocate', link: '/development/DevilsAdvocate' },
    { text: '📎 Downloads', link: '/development/Download' },
    { text: '❔ Research Questions', link: '/development/ResearchQuestions' },
    { text: '🕸 Element Relationship Diagram', link: '/development/ElementRelationshipDiagram' },
    { text: '🔷 Roadmap', link: '/development/Roadmap' },
    { text: '☑ ToDo', link: '/development/ToDo' },
    {
      text: 'Copy Other Sports',
      collapsed: true,
      items: [
        { text: 'Overview', link: '/development/OtherSport/Overview' },
        { text: 'Breaking', link: '/development/OtherSport/Breaking' },
        { text: 'Gymnastics', link: '/development/OtherSport/Gymnastics' },
        { text: 'Parkour', link: '/development/OtherSport/Parkour' },
        { text: 'Skiing', link: '/development/OtherSport/Skiing' },
        { text: 'Skateboarding', link: '/development/OtherSport/Skateboarding' },
        { text: 'Trampoline', link: '/development/OtherSport/Trampoline' },
      
      ]
    },
  ]
}

function sidebarJudging() {
  return [
    { text: '⚖ Overview', link: '/judging/JudgingOverview' },
    { text: '⚖ Become a Judge', link: '/judging/HowBecomeJudge' },
    { text: '⚖ Educate Judges', link: '/judging/HowEducateJudge' },
    { text: '⚖ Recruit Judges', link: '/judging/HowRecruitJudge' },
    { text: '⚖ Set Up Judging Area', link: '/judging/JudgingAreaSetUp' },
    { text: '⚖ Rules', link: '/judging/Rules' },
    { text: '⚖ Judging Process', link: '/judging/JudgingProcess' },
    { text: '⚖ Beta Scoring App', link: '/judging/BetaScoreApp' },
    { text: '⚖ Contingency Plans', link: '/judging/ContingencyPlans' },


  ]
}
