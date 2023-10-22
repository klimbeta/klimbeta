# 🔷🔺 <route>Route</route> Risk Score

## Definition

- Probability of completing a <route>Route</route> or <route>Route</route> section.
    - Improbable, Remote, Occasional, Probable, Frequent
- Consequences of RouteError
    - Negligible, Marginal, Moderate, Critical, Catastrophic

## Examples of <route>Route</route> Risk

## Low <route>Route</route> Risk
- MultipleRouteSurfaces, there is a risk that you’ll choose the wrong RouteSurface.
- Clearly defined Route, where every hold can easily be seen.
- Leave enough space on hold for Match or Swap.

## High <route>Route</route> Risk

- Small <route>Route</route> Surface Size
- HiddenRouteSurface
    - Blind <route>Route</route> Surface
    - Blindfolding can a ForcedBeta. Vision is a NeuroElement which can be removed. 
    - Blind Landing
- A <route>Route</route> with dead ends.
- Forced <route>Route</route> sequence
    - ClockMove
    - HandSwap on SmallHold.
- Limited <route>Route</route> Space
    - PocketHold
    - CrackWall


## Advantage

Advantage over other Climbers.
- Risk increases in Competition when the Friction of LoadingSurfaces decreases when Holds become TooChalky.

- Risk decreases when LoadingSurfaces are Prechalked.

## <route>Route</route> Risk Factors

### Accuracy

TargetSurfaceForm
- Limited Angle of Approach

TargetSurfaceSize
- NoSurfaceLeft

SmallHold.Route.R+
- TicMark
    - TicMark decreases Risk
- PocketHold
    - BowlingBallHold\Crux of Biographie (5.15a)

- Risk increases when there is only a small part of a SmallHold which must be hit perfectly, i.e. there is little margin of error of FingerPlacement on a LoadingSurface.

- Risk increases when there is a limited range of directions (vectors) in which to load a LoadingSurface.

- StabMovement
    - HangingFootTransfer ->
    - FootStab.FootJam
    - FootStab.FootSlot
    - FootStab to a SmallFootHold
    - HandStab during a PaddleDyno

AccurateTiming
- MovementTimingError
- TimeLimit
    - The faster a Climber moves, the more time they have to get to TargetSurface or RestPosition.
    - Climbers can wait longer if they can move fast.
- ReflexSpeed
- When the Climber needs to get a ClimberPart to a LoadingSurface

- Risk increases when Movement timing has a small margin for error.
    - CoordinationMovement, Dyno.HandRelease, ArmBrake, FootStab, ReleaseMovement
    - ([Hand,Foot])Catch On(Maximum([Arm,Leg])Reach)


### Commiting

- RiskOfInjury
- RunoutRouteSection
    - RouteLength
    - RouteSectionLength
    - DisplacementToLastProtection
- FreeSoloRoute
- DeepWaterSoloRoute

> “It’s hard to push yourself to the absolute limit when you’re really high up” - Chris Sharma, ReelRock12


Commitment.RouteRisk(-)
- TopRopeClimbing


### Hidden Route Surface

Definition(HiddenLoadingSurface)
- A LoadingSurface which can’t be seen from a Climber’s RoutePosition.
- A HiddenLoadingSurface increases the Risk of a Movement.


Quote

> “There’s a chance that you’ll miss it”

> “I can’t see it”

> “How good is the hold, I can’t see it from the ground?”


HiddenRouteSurface.MoveRisk(-)
- A LoadingSurface which was recently visible from AnteRoutePosition is lower Risk than a HiddenLoadingSurface which isn’t seen until CurrentRoutePosition or PostRoutePosition.
    - MoveRisk.HiddenLoadingSurface(TopOut.TargetSurface > SitStart.StartHold)

Hidden ByRouteSurfaceSize
- Some LoadingSurfaces are so small that they can’t be seen.


HiddenByRouteForm
- Can’t be seen from Current EyePosition.
    - RoutePosition
    - MovementPosition

- SwapMovement on LoadingSurface.
- UnderclingGrip when you can’t see from Distal of Elbow.
- FootHold

- HiddenByShadow
    - A LoadingSurface can be Hidden in a Shadow
        - What LoadingSurfaceType is most easily HiddenByShadow?
            - SmallHold

    - HiddenByNoShadow
        - HiddenByNoShadow only applies to RockWalls, since ArtificialHolds are almost always a different color from the wall and artificial lighting doesn’t ever vary.
        - Shadows help Climbers to see the 3Dimensional form of LoadingSurfaces.
        - There are no Shadows when the light is directly shining on the Wall.

- Mnemonic of LoadingSurfaceLocation decreases Risk.
    - (LoadingSurfaceLocation)RelativeTo(Route, Climber, (Route+Climber))
    - Using a distinct part of the wall on the Climber’s side of an OutsideCornerWall as a guide for the LoadingSurface on the Hidden side of the CornerWall.
    - TicMark
        - TicMark decreases Risk.
    - TicMark can’t be unseen, just like a story spoiler.
    - TicMarks prevent OnsightAttempt.
    - Knowing the location of all the holds and LoadingSurfaces decreases Risk.

- Hold hidden under a Volume
- LoadingSurface is Hidden around a CornerWall 
    - VerticalCornerWall (Arete)
    - HorizontalCornerWall (Bulge, TopOut)
        - Foothold is hidden from Climber since it is below a BulgeWall

- HiddenByClimber
    - Hidden from Eyes by HeadPosition, HeadOrientation, Facing the wrong way.
    - NeckRotateError can cause MovementError and Fall. Fall caused by MovementError of a submovement which isn’t contacting the wall, such as HeadMovement.
    - Leg hides a HandFootMatch.
    - Climber’s chest too close to the wall to Look down at a Hold.
        - LookAt.MovementError(ChestTooClose)
- JumpStart
    - When performing a JumpStart, Climbers can’t see what the LoadingSurface is like.


### Irreversible

Definition(Irreversible)
- A movement which can’t be reversed.
- A Route section which can’t be DownClimbed.
- DownClimb not possible.


Irreversible.RouteRisk(High)

- Deadpoint from a NonJugHold
- LoadingSurfaces which use StaticUpMovements that finish with FingertipPress and can’t start with FingertipPress when DownClimbing.
- DynamicDownMovement is not possible because it will overload StaticFrictionThreshold.


RouteGap

- GapJump
    - TowerJump
        - Czech Tower Jumping | The New York Times
    - FallOver.FootStab
        - AlexHonnoldKarateKick


Irreversible.RouteRisk(Low)
- OverhangWall DownClimb
- RouteSections which are reversible but with at least a moderate probability of resulting in a Fall.
- OverhangWall

### RouteSurface

RiskRouteSurface
- Definition(RouteSurface)
    - A surface in a Route upon which the Climber applies a force.

Quote
- MarginalHold
- HeinousHold


RouteSurface.MoveRisk(+)
    - Risk of Slipping off TargetSurface.
        - AlexHonnold on the FreeblastSlab in FreeSoloMovie.
        - NoShadowHold
        - SlightConcavityHold

- Risk of not being able to Successfully load TargetSurface.
- Unable to RepositionFinger on Hold once the Hold is caught HandCatch
    - Unable to RepositionFinger on TargetSurface once the Surface is loaded.\HandCatch


RouteSurface.RouteRisk(+)
    - PolishedGraniteInsideCornerWall
        - HazelFindlay\TaintedLove\
            - https://www.youtube.com/watch?v=nPtdvfqYrdY

SmallHold
- NoSurfaceLeft
- SmallFootHold
    - FootSwap, FootStab

LoadingSurface.Risk(++)
- Decrease LoadingSurface CoefficientOfFriction
- SmoothTexture increases Risk since there is less Friction, therefore there is a great chance of FootSlip.


### OffRoute
Definition(OffRoute)
- Lost
- Climbing on a part of the Wall which is not part of the Route.


(Risk.OffRoute)ProportionalTo(DistanceFromProtection)
- How difficult is it to get back on the Route.

RouteFinding while on Wall.

### No Revovery

NoRecovery.RouteRisk(+)
- SloperHold
- ConvexSurface
