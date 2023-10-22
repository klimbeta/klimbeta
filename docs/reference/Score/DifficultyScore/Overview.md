# 🔷 Difficulty Score Overview

Based on the **RICscale** which was developed by Tonde Katiyo and Jacky Godoffe, and was first published in Godoffe's book [My Keys to Routesetting](http://jackygodoffe.com/book.html). The RICscale is an acronym for Risk, Intensity, and Complexity. Sometimes 'E' is added to the scale for Emotion, BetaComp places emotion in the [Neuro](/reference/Neuro/NeuroOverview) part of Beta instead.

![MyKeysToRoutesetting](/MyKeysToRoutesetting.png)

The RICscale is used mostly by Routesetters to design and describe their Routes. In a BetaComp the RICscale can be applied to Routes, Moves, and to the Wall itself. 

![BetaScores](/BetaScore/BetaScores.png)


## Numerical Score

Each performed Element has a particular numerical value.

## Example

For example this Route:

TODO A Tagged Storyboard of a Climber on a <route>Route</route> 


::: tip Beta Difficulty

:::

::: tip Move Difficulty

Move Risk

Move Intensity

Move Complexity
:::

---

::: tip <route>Route</route> Difficulty

Route Risk

Route Intensity

Route Complexity
:::

---

::: tip Environment Difficulty

Environment Risk

Environment Intensity

- Wall Angle

Environment Complexity

- High Altitude Climbing 

:::

## Levels of BetaDifficultyScore

The Dimensions of DifficultyScore give the <route>Route</route> its difficulty.

IntensityMatching

### Relationship between RouteDifficultyGrade and BetaDifficultyScore.

BetaDifficultyScore is relative to DifficultyGrade and ClimberAbility.
- A CrimpGrip is very HighMovementIntensity for a V2 Climber.


## RelativeScore

The value of one RICscore Instance is relative to another instance of RICscore.

### Fractional

#### Quote

Double
> “RouteA is twice as (Risky, Intense, Complex) as RouteB”


Half

> “RouteA is half as (Risky, Intense, Complex) as RouteB”

> “ClimbRIC half as Intense”

Percentage

> “RouteA is 50% more (Risky, Intense, Complex) than RouteB”


## DifficultyScoreAlgebra

- Addition
- Subtraction
- Division
- Multiplication


## Notation

### DotNotation

(BetaRICscore != Climb.RIC), (MovementRisk != Movement.R), (RouteIntensity != Route.I)

- BetaRICscore is an object name while Climb.RIC is a variable name which has an Integer value.


- BetaRICscore contains concepts which compose each of the BetaRICscore’s dimensions while Climb.RIC only represents the Integer values of each dimension.

### Comparison

Risk(StemmingRest.FootSmear > StemmingRest.FootEdge)


### Climb.RIC Modification

Differentiate(RiskLevelNotation, RiskModificationNotation)

- ((HighRisk = Risk+) != (IncreaseRisk = Risk(++)))

- ((LowRisk = Risk-) != (DecreaseRisk = Risk(--)))


Notation is borrowed from Javascript.

- ‘(++)’ is called the IncrementOperator
- ‘(--)’ is called the DecrementOperator

Don’t write the dimension which isn’t changing

- (Climb.RI(++)C = Climb.I(++))
- Error
    - (Climb.R(++)I(++)C(++) = Climb.RIC(++))


#### Increase Climb.RIC

- ‘(++)’ is called the IncrementOperator

- Climb.RIC(++), Climb.R(++), Climb.RI(++), Climb.RC(++), Climb.IC(++), Climb.I(++), Climb.C(++), 

- Movement.RIC(++), Movement.R(++), Movement.RI(++), Movement.RC(++),  Movement.IC(++), Movement.I(++), Movement.C(++)

- Route.RIC(++), Route.R(++), Route.RI(++), Route.RC(++), Route.IC(++), Route.I(++), Route.C(++)

- Increase two dimensions of BetaRICscore ((DryRouteSurface => WetRouteSurface) = R.RI(++)) = “RouteRisk and RouteIntensity when a DryRouteSurface becomes a WetRouteSurface”)

#### (Movement, Route)Modification decreases BetaRICscore.value

- ‘(--)’ is called the DecrementOperator

Modify two dimensions of BetaRICscore

- Simplify by removing redundant IncrementOperator
    - (Climb.R(++)I(++) == Climb.RI(++))
    - (Climb.I(++)C(++) == Climb.IC(++))

- Increase one dimension while decreasing dimensions
- Climb.R(++)I(--)
- Climb.I(++)C(--)
- Climb.R(++)I(--)C(++)

### (Low, High)

Differentiate(RiskLevelNotation, RiskModificationNotation)

- ((HighRisk = Risk+) != (IncreaseRisk = Risk(++)))
- ((LowRisk = Risk-) != (DecreaseRisk = Risk(--)))
- ((HandParallelCrack.R.I-C+) = “A HandParallelCrack is RouteIntensity.Low and RouteComplexity.High”)
- Climb.Risk.High = C.R+
- (Move.Risk.High = M.R+)
- (Move.Risk.Low = M.R-)
- (Route.Risk.High = R.R+)
- (Route.Risk.Low = R.R-)

### (1, 2, 3, 4, 5)

- (Move.Risk.4 = M.R4)
- (Route.Risk.4 = R.R4)

Each letter of the BetaRICscore is given a number. This method is useful because the numbers can be added up to give a BetaRICscoreTotal.


## DifficultyScore.UserExperience

### Who

#### DesignPrompt

Why would a Routesetter, Climber, Coach, Spectator, Spotter, Judge care to know this information? Practical not theoretical?

#### Routesetter

CompetitionRoutesetting

- CompetitionRound.RICscore
    - To compare (QualifierRound, SemiRound, FinalRound) in Competitions.

RouteConsistency

- Use (++) and (--) to adjust the RICscore dimensions of a Route.
- Consistent Difficulty for each Grade
    - To ensure that each <route>Route</route> of the gym’s arbitrary grading scale has the same difficulty.
    > “That move doesn’t feel like a Blue level move”

- ConsistentRICscoreValue
    - “Too cruxy”
    - Usually applies to Intensity

GoodRoute to RICscore
- Explain why a <route>Route</route> is ‘good’.

RICscore to GoodRoute

- HeadRouteSetter assigns a RIC.value or RIC.description.
- Make a GoodRoute.

RouteSetterPedagogy

- RouteFeedback
- For instructors to articulate better.

#### Coaching

Teach Climbers how to articulate the attributes of Movement or Route

Use Use (++) and (--) to adjust the RICscore dimensions of a Movement.

Help climbers to find the easiest way to send the route.


#### Competitor

### What

#### ClimbType

SoloOnsightAttempt
ProtectionType
- BoulderClimb
- FreeSolo()Climb
- TopRopeClimb
- Lead()Climb
    - Free()Climb
        - SportClimb
        - TradClimb
    - Aid()Climb

#### BetaRICscoreScope

What aspect of climbing is the BetaRICscore describing?

Scopes are arranged in a hierarchical structure
- CompetitionRouteHierarchy
    - (RouteSurface < Hold < Wall < <route>Route</route> < CompetitionRound < Competition)

- MultipitchRouteHierarchy
    - (RouteSurface < Hold < Wall < <route>Route</route> < Pitch < Multipitch)


### Why

- To articulate how a <route>Route</route> is (Hard, Difficult, Tough, Challenging, Problematic).

- To articulate how a <route>Route</route> is (Hard, Difficult, Tough, Challenging, Problematic).
- To modify the difficulty of each               
- To specify particular instances when a Climber is on the Wall.
- To describe Movements.
- To describe Movements more precisely.
- To increase the sophistication of how Routesetting is spoken about.
Climbers already use the concepts of the RICscore, now the concepts are being organized into a single document.
- To ensure variability in setting to prevent Climber boredom.
    - RouteComposition
    - WallComposition
    - RoundComposition
    - GymComposition


### How

#### Instruction

- HeadRoutesetter
- RoutesetterLesson
- ClimberLesson
- CoachLesson
- ImperativeMood
    - Definition(ImperativeMood)
    > “The imperative mood is used to demand or require that an action be performed. It is usually found only in the present tense, second person. To form the imperative mood, use the base form of the verb. For example: Heat the water to 65°C before adding the sample.”


#### Modify Climb.RIC

Remember that BetaRICscore is used by Increasing or decreasing the values of its dimensions. Don’t fall into trying to rank movements along a precise continuum. Maybe that will be possible in the future, but for now focus on the MovementRICscore values can be changed and how they are related to each other

Modify Route.RIC
- Route.RIC changes relative to ClimberAttributes ClimberType

EnvironmentalInfluences
- Time
    - RouteTiming
    - Does <route>Route</route> contain Time?\TimeLimit\The LappnorProject has a season. DawnWall has a time of day before it gets too warm.


Maximize
Minimize
Increase
Decrease
Maintain


#### Routesetting

Comparison of Climb.RIC

- RouteConsistency
    - Comparison of RouteSection.RIC
    - A ComplexMovement after a Dyno.

- MovementConsistency
    
    > “It’s just hard because there’s no rest, there isn’t a definite CruxMovement”

- CruxIdentification
    - What makes the crux a crux?

- Comparatives
    > “Easier”, “Better”, “Shittier”, “Worse”, “More difficult” 
    
    > “Riskier”, “More intense”, “More complex”
    
    > “Highly”, “Mildly”, “Low”, “High”

- Superlative
    
    > “Riskiest, “most intense”, “Most complex”, MovementCrux, ComplexityCrux, IntensityCrux, RiskCrux

- LevelAssignment
    - IntensityMatching
    - HeadRoutesetter
    - RoutesettingTeamConsensus
        - RoutesetterBias can be mitigated by RoutesettingTeamConsensus


ClimberBias
ClimberHeight
ClimberAbility

CognitiveBias
- CurseOfKnowledge
- MovementLiteracy
- Chunking

Sandbagging
Observation
- DeduceLevel
- RouteTesting
    - AlsoKnownAs(Forerunning)
    - Adjust RIC during RouteTesting
    > “Tweak the Route”


#### Note Taking

Why take notes?
- Record RIC values

SetUp to take notes
- Table on paper or spreadsheet
    - List of ColumnNames: 
    RouteLocation, 
    RouteRisk,
    RouteHoldCount, 
    RouteIntensity, 
    RouteComplexity, 
    RouteRICtotal 

Whiteboard
- HeadRouteSetter assigns RICscore values to each Routesetter on the whiteboard
- It is common to have a matrix of all Routes in a competition round. With RouteName, RouteLocation, and a column for each of Risk, Intensity, Complexity, and frequently a column for RouteTheme or RouteIntention
