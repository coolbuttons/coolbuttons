
import React from 'react';
import { ButtonDesign, ButtonCategory } from '../types';

// ALL MODULAR COMPONENT IMPORTS
import { design as modernPrimary } from '../components/buttons/ModernPrimary';
import { design as cyberGradient } from '../components/buttons/CyberGradient';
import { design as magneticSoft } from '../components/buttons/MagneticSoft';
import { design as glassInset } from '../components/buttons/GlassInset';
import { design as neumorphicConcave } from '../components/buttons/NeumorphicConcave';
import { design as expandingPill } from '../components/buttons/ExpandingPill';
import { design as slantedCut } from '../components/buttons/SlantedCut';
import { design as glowOutline } from '../components/buttons/GlowOutline';
import { design as pixel3d } from '../components/buttons/Pixel3D';
import { design as dashedReveal } from '../components/buttons/DashedReveal';
import { design as retro3d } from '../components/buttons/Retro3D';
import { design as neumorphicSoft } from '../components/buttons/NeumorphicSoft';
import { design as glassGlow } from '../components/buttons/GlassGlow';
import { design as cyberpunk } from '../components/buttons/Cyberpunk';
import { design as brutalist } from '../components/buttons/Brutalist';
import { design as shimmer } from '../components/buttons/Shimmer';
import { design as liquidFlow } from '../components/buttons/LiquidGradient';
import { design as handDrawn } from '../components/buttons/HandDrawn';
import { design as neonGhost } from '../components/buttons/GlowGhost';
import { design as bentoBox } from '../components/buttons/BentoBox';
import { design as neonBorder } from '../components/buttons/NeonBorder';
import { design as underlineSlide } from '../components/buttons/UnderlineSlide';
import { design as rippleEffect } from '../components/buttons/RippleEffect';
import { design as shinyGlass } from '../components/buttons/ShinyGlass';
import { design as retroPress } from '../components/buttons/RetroPress';
import { design as neonPill } from '../components/buttons/NeonPill';
import { design as magneticBorder } from '../components/buttons/MagneticBorder';
import { design as stackedLayers } from '../components/buttons/StackedLayers';
import { design as glitchEffect } from '../components/buttons/GlitchEffect';
import { design as softNeumorphicIn } from '../components/buttons/SoftNeumorphicIn';
import { design as splitColor } from '../components/buttons/SplitColor';
import { design as outlineGrow } from '../components/buttons/OutlineGrow';
import { design as paperFloat } from '../components/buttons/PaperFloat';
import { design as dotPattern } from '../components/buttons/DotPattern';
import { design as cyberBevel } from '../components/buttons/CyberBevel';
import { design as bouncyIcon } from '../components/buttons/BouncyIcon';
import { design as diagonalStripes } from '../components/buttons/DiagonalStripes';
import { design as innerGlow } from '../components/buttons/InnerGlow';
import { design as modernMinimal } from '../components/buttons/ModernMinimal';
import { design as glassCard } from '../components/buttons/GlassCard';
import { design as skewShift } from '../components/buttons/SkewShift';
import { design as floatingShadow } from '../components/buttons/FloatingShadow';
import { design as borderTrace } from '../components/buttons/BorderTrace';
import { design as perspectiveTilt } from '../components/buttons/PerspectiveTilt';
import { design as claymorphic } from '../components/buttons/Claymorphic';
import { design as holographic } from '../components/buttons/Holographic';
import { design as retroSticker } from '../components/buttons/RetroSticker';
import { design as scanlineCyber } from '../components/buttons/ScanlineCyber';
import { design as morphingShape } from '../components/buttons/MorphingShape';
import { design as liquidFill } from '../components/buttons/LiquidFill';
import { design as invertedRound } from '../components/buttons/InvertedRound';
import { design as retroComputer } from '../components/buttons/RetroComputer';
import { design as minimalArrow } from '../components/buttons/MinimalArrow';
import { design as stripeHover } from '../components/buttons/StripeHover';
import { design as softGlowText } from '../components/buttons/SoftGlowText';
import { design as splitDiagonal } from '../components/buttons/SplitDiagonal';
import { design as pillOutlineFill } from '../components/buttons/PillOutlineFill';
import { design as arcadeGreen } from '../components/buttons/ArcadeGreen';
import { design as etherealBlur } from '../components/buttons/EtherealBlur';
import { design as borderBeam } from '../components/buttons/BorderBeam';
import { design as magnifyHover } from '../components/buttons/MagnifyHover';
import { design as depthSlide } from '../components/buttons/DepthSlide';
import { design as roughEdge } from '../components/buttons/RoughEdge';
import { design as dualTone } from '../components/buttons/DualTone';
import { design as gradientShadow } from '../components/buttons/GradientShadow';
import { design as glassFrostedInner } from '../components/buttons/GlassFrostedInner';
import { design as neumorphicDark } from '../components/buttons/NeumorphicDark';
import { design as ghostReveal } from '../components/buttons/GhostReveal';
import { design as rainbowBorder } from '../components/buttons/RainbowBorder';
import { design as textScramble } from '../components/buttons/TextScramble';
import { design as gooeyButton } from '../components/buttons/GooeyButton';
import { design as magnifyText } from '../components/buttons/MagnifyText';
import { design as cyberGlow } from '../components/buttons/CyberGlow';
import { design as doubleShadow } from '../components/buttons/DoubleShadow';
import { design as paperFold } from '../components/buttons/PaperFold';
import { design as floatingPulse } from '../components/buttons/FloatingPulse';
import { design as innerGlowPill } from '../components/buttons/InnerGlowPill';
import { design as retroConsole } from '../components/buttons/RetroConsole';
import { design as glassStroke } from '../components/buttons/GlassStroke';
import { design as wavyUnderline } from '../components/buttons/WavyUnderline';
import { design as skewedOutline } from '../components/buttons/SkewedOutline';
import { design as magneticCircle } from '../components/buttons/MagneticCircle';
import { design as liquidWarp } from '../components/buttons/LiquidWarp';
import { design as minimalBadge } from '../components/buttons/MinimalBadge';
import { design as gradientConic } from '../components/buttons/GradientConic';
import { design as iconBounce } from '../components/buttons/IconBounce';
import { design as prismShine } from '../components/buttons/PrismShine';
import { design as industrialPlate } from '../components/buttons/IndustrialPlate';
import { design as softBloomPill } from '../components/buttons/SoftBloomPill';
import { design as dashRotate } from '../components/buttons/DashRotate';
import { design as glassDouble } from '../components/buttons/GlassDouble';
import { design as neumorphicConcavePill } from '../components/buttons/NeumorphicConcavePill';
import { design as retroBezel } from '../components/buttons/RetroBezel';
import { design as textStrikethrough } from '../components/buttons/TextStrikethrough';
import { design as expandingAura } from '../components/buttons/ExpandingAura';
import { design as spectrumWave } from '../components/buttons/SpectrumWave';
import { design as gridOverlay } from '../components/buttons/GridOverlay';

// HIGH-FIDELITY NEW ADDS
import { design as glassFusion } from '../components/buttons/GlassFusion';
import { design as claySoftPill } from '../components/buttons/ClaySoftPill';
import { design as skeuoPlastic } from '../components/buttons/SkeuoPlastic';
import { design as neoHardShadow } from '../components/buttons/NeoHardShadow';
import { design as liquidPrism } from '../components/buttons/LiquidPrism';

// NEW SKEUOMORPHIC COLLECTION
import { design as leatherStitch } from '../components/buttons/LeatherStitch';
import { design as metalBrush } from '../components/buttons/MetalBrush';
import { design as glassGem } from '../components/buttons/GlassGem';
import { design as woodGrain } from '../components/buttons/WoodGrain';
import { design as rubberPress } from '../components/buttons/RubberPress';
import { design as ceramicTile } from '../components/buttons/CeramicTile';
import { design as copperPlate } from '../components/buttons/CopperPlate';
import { design as ribbonStitch } from '../components/buttons/RibbonStitch';

// NEW ESSENTIAL BUTTONS
import { design as primaryButton } from '../components/buttons/PrimaryButton';
import { design as secondaryButton } from '../components/buttons/SecondaryButton';
import { design as successButton } from '../components/buttons/SuccessButton';
import { design as dangerButton } from '../components/buttons/DangerButton';
import { design as warningButton } from '../components/buttons/WarningButton';
import { design as outlineButton } from '../components/buttons/OutlineButton';
import { design as textButton } from '../components/buttons/TextButton';
import { design as disabledButton } from '../components/buttons/DisabledButton';
import { design as iconButton } from '../components/buttons/IconButton';
import { design as smallButton } from '../components/buttons/SmallButton';
import { design as largeButton } from '../components/buttons/LargeButton';
import { design as infoButton } from '../components/buttons/InfoButton';
import { design as offButton } from '../components/buttons/OffButton';
import { design as landingPrimary } from '../components/buttons/LandingPrimary';
import { design as landingSecondary } from '../components/buttons/LandingSecondary';

// NEW GRADIENT BUTTONS
import { design as gradientWave } from '../components/buttons/GradientWave';
import { design as fireGradient } from '../components/buttons/FireGradient';
import { design as oceanGradient } from '../components/buttons/OceanGradient';
import { design as purpleViolet } from '../components/buttons/PurpleViolet';
import { design as sunriseGradient } from '../components/buttons/SunriseGradient';
import { design as softGradient } from '../components/buttons/SoftGradient';
import { design as purpleRain } from '../components/buttons/PurpleRain';
import { design as goldenHour } from '../components/buttons/GoldenHour';
import { design as midnightDream } from '../components/buttons/MidnightDream';
import { design as iceGloss } from '../components/buttons/IceGloss';
import { design as flameBurst } from '../components/buttons/FlameBurst';

// NEW ANIMATED BUTTONS
import { design as pulseGlow } from '../components/buttons/PulseGlow';
import { design as bounceScale } from '../components/buttons/BounceScale';
import { design as spinRotate } from '../components/buttons/SpinRotate';
import { design as shiftShadow } from '../components/buttons/ShiftShadow';
import { design as flipHover } from '../components/buttons/FlipHover';
import { design as floatingLeaf } from '../components/buttons/FloatingLeaf';
import { design as shadowSlide } from '../components/buttons/ShadowSlide';
import { design as glossyShine } from '../components/buttons/GlossyShine';
import { design as floatFade } from '../components/buttons/FloatFade';
import { design as pulseRing } from '../components/buttons/PulseRing';
import { design as glowPulse } from '../components/buttons/GlowPulse';
import { design as springButton } from '../components/buttons/SpringButton';

// NEW MINIMAL BUTTONS
import { design as minimalDot } from '../components/buttons/MinimalDot';
import { design as minimalBold } from '../components/buttons/MinimalBold';
import { design as minimalCircle } from '../components/buttons/MinimalCircle';
import { design as minimalUnderline } from '../components/buttons/MinimalUnderline';
import { design as minimalFrame } from '../components/buttons/MinimalFrame';
import { design as minimalPlus } from '../components/buttons/MinimalPlus';

// NEW GLASSMORPHIC BUTTONS
import { design as glassmorphicSoft } from '../components/buttons/GlassmorphicSoft';
import { design as glassmorphicBold } from '../components/buttons/GlassmorphicBold';
import { design as frostGlass } from '../components/buttons/FrostGlass';
import { design as neoGlassmorph } from '../components/buttons/NeoGlassmorph';

// NEW EXPERIMENTAL BUTTONS
import { design as cyberpunkNeon } from '../components/buttons/CyberpunkNeon';
import { design as glitchVibe } from '../components/buttons/GlitchVibe';
import { design as morphShape } from '../components/buttons/MorphShape';
import { design as inkBlob } from '../components/buttons/InkBlob';
import { design as metallicSheen } from '../components/buttons/MetallicSheen';
import { design as blurEffect } from '../components/buttons/BlurEffect';

// NEW NEUMORPHIC BUTTONS
import { design as neumorphicRaised } from '../components/buttons/NeumorphicRaised';
import { design as neumorphicFlat } from '../components/buttons/NeumorphicFlat';
import { design as neumorphicPress } from '../components/buttons/NeumorphicPress';

// NEW RETRO BUTTONS
import { design as retroPixel } from '../components/buttons/RetroPixel';
import { design as vaporwave } from '../components/buttons/Vaporwave';
import { design as chipBoard } from '../components/buttons/ChipBoard';
import { design as retroBeep } from '../components/buttons/RetroBeep';

// NEW SKEUOMORPHIC BUTTONS
import { design as stoneButton } from '../components/buttons/StoneButton';
import { design as velvetButton } from '../components/buttons/VelvetButton';
import { design as silkButton } from '../components/buttons/SilkButton';

// LATEST 30 BATCH
import { design as cyberSlice } from '../components/buttons/CyberSlice';
import { design as floatingLabel } from '../components/buttons/FloatingLabel';
import { design as retroJoystick } from '../components/buttons/RetroJoystick';
import { design as glassRefraction } from '../components/buttons/GlassRefraction';
import { design as neumorphicEmbossed } from '../components/buttons/NeumorphicEmbossed';
import { design as gradientMorph } from '../components/buttons/GradientMorph';
import { design as slidingIcon } from '../components/buttons/SlidingIcon';
import { design as starkMono } from '../components/buttons/StarkMono';
import { design as lavaFlow } from '../components/buttons/LavaFlow';
import { design as independentShadow } from '../components/buttons/IndependentShadow';
import { design as pathDraw } from '../components/buttons/PathDraw';
import { design as contrastFrame } from '../components/buttons/ContrastFrame';
import { design as oldTerminal } from '../components/buttons/OldTerminal';
import { design as glassFrostyPill } from '../components/buttons/GlassFrostyPill';
import { design as innerShadowDepth } from '../components/buttons/InnerShadowDepth';
import { design as outlineComet } from '../components/buttons/OutlineComet';
import { design as zeroElevation } from '../components/buttons/ZeroElevation';
import { design as diamondCut } from '../components/buttons/DiamondCut';
import { design as neonPulseRing } from '../components/buttons/NeonPulseRing';
import { design as textClipping } from '../components/buttons/TextClipping';
import { design as classic90s } from '../components/buttons/Classic90s';
import { design as glassReflective } from '../components/buttons/GlassReflective';
import { design as highElevatedNeumorphic } from '../components/buttons/HighElevatedNeumorphic';
import { design as rainbowText } from '../components/buttons/RainbowText';
import { design as chevronExpand } from '../components/buttons/ChevronExpand';
import { design as thickUnderline } from '../components/buttons/ThickUnderline';
import { design as deepBlurGlass } from '../components/buttons/DeepBlurGlass';
import { design as indicatorButton } from '../components/buttons/IndicatorButton';
import { design as fragmentButton } from '../components/buttons/FragmentButton';
import { design as simplePill } from '../components/buttons/SimplePill';

// RETRO NEW ADDS
import { design as retroCassette } from '../components/buttons/RetroCassette';
import { design as vaporSlab } from '../components/buttons/VaporSlab';
import { design as retroArcadeNeon } from '../components/buttons/RetroArcadeNeon';

export const buttonLibrary: ButtonDesign[] = [
  // HIGH-FIDELITY NEW ADDS
  glassFusion,
  claySoftPill,
  skeuoPlastic,
  neoHardShadow,
  liquidPrism,
  retroCassette,
  vaporSlab,
  retroArcadeNeon,

  // NEW ESSENTIAL BUTTONS
  primaryButton,
  secondaryButton,
  successButton,
  dangerButton,
  warningButton,
  outlineButton,
  textButton,
  disabledButton,
  iconButton,
  smallButton,
  largeButton,
  infoButton,
  offButton,
  landingPrimary,
  landingSecondary,

  // NEW GRADIENT BUTTONS
  gradientWave,
  fireGradient,
  oceanGradient,
  purpleViolet,
  sunriseGradient,
  softGradient,
  purpleRain,
  goldenHour,
  midnightDream,
  iceGloss,
  flameBurst,

  // NEW ANIMATED BUTTONS
  pulseGlow,
  bounceScale,
  spinRotate,
  shiftShadow,
  flipHover,
  floatingLeaf,
  shadowSlide,
  glossyShine,
  floatFade,
  pulseRing,
  glowPulse,
  springButton,

  // NEW MINIMAL BUTTONS
  minimalDot,
  minimalBold,
  minimalCircle,
  minimalUnderline,
  minimalFrame,
  minimalPlus,

  // NEW GLASSMORPHIC BUTTONS
  glassmorphicSoft,
  glassmorphicBold,
  frostGlass,
  neoGlassmorph,

  // NEW EXPERIMENTAL BUTTONS
  cyberpunkNeon,
  glitchVibe,
  morphShape,
  inkBlob,
  metallicSheen,
  blurEffect,

  // NEW NEUMORPHIC BUTTONS
  neumorphicRaised,
  neumorphicFlat,
  neumorphicPress,

  // NEW RETRO BUTTONS
  retroPixel,
  vaporwave,
  chipBoard,
  retroBeep,

  // NEW SKEUOMORPHIC COLLECTION
  leatherStitch,
  metalBrush,
  glassGem,
  woodGrain,
  rubberPress,
  ceramicTile,
  copperPlate,
  ribbonStitch,
  stoneButton,
  velvetButton,
  silkButton,

  modernPrimary,
  retro3d,
  neumorphicSoft,
  glassGlow,
  cyberpunk,
  brutalist,
  shimmer,
  liquidFlow,
  handDrawn,
  neonGhost,
  bentoBox,
  cyberGradient,
  magneticSoft,
  glassInset,
  neumorphicConcave,
  expandingPill,
  slantedCut,
  glowOutline,
  pixel3d,
  dashedReveal,
  neonBorder,
  underlineSlide,
  rippleEffect,
  shinyGlass,
  retroPress,
  neonPill,
  magneticBorder,
  stackedLayers,
  glitchEffect,
  softNeumorphicIn,
  splitColor,
  outlineGrow,
  paperFloat,
  dotPattern,
  cyberBevel,
  bouncyIcon,
  diagonalStripes,
  innerGlow,
  modernMinimal,
  glassCard,
  skewShift,
  floatingShadow,
  borderTrace,
  perspectiveTilt,
  claymorphic,
  holographic,
  retroSticker,
  scanlineCyber,
  morphingShape,
  liquidFill,
  invertedRound,
  retroComputer,
  minimalArrow,
  stripeHover,
  softGlowText,
  splitDiagonal,
  pillOutlineFill,
  arcadeGreen,
  etherealBlur,
  borderBeam,
  magnifyHover,
  depthSlide,
  roughEdge,
  dualTone,
  gradientShadow,
  glassFrostedInner,
  neumorphicDark,
  ghostReveal,
  rainbowBorder,
  textScramble,
  gooeyButton,
  magnifyText,
  cyberGlow,
  doubleShadow,
  paperFold,
  floatingPulse,
  innerGlowPill,
  retroConsole,
  glassStroke,
  wavyUnderline,
  skewedOutline,
  magneticCircle,
  liquidWarp,
  minimalBadge,
  gradientConic,
  iconBounce,
  prismShine,
  industrialPlate,
  softBloomPill,
  dashRotate,
  glassDouble,
  neumorphicConcavePill,
  retroBezel,
  textStrikethrough,
  expandingAura,
  spectrumWave,
  gridOverlay,

  // NEWEST COLLECTION
  cyberSlice,
  floatingLabel,
  retroJoystick,
  glassRefraction,
  neumorphicEmbossed,
  gradientMorph,
  slidingIcon,
  starkMono,
  lavaFlow,
  independentShadow,
  pathDraw,
  contrastFrame,
  oldTerminal,
  glassFrostyPill,
  innerShadowDepth,
  outlineComet,
  zeroElevation,
  diamondCut,
  neonPulseRing,
  textClipping,
  classic90s,
  glassReflective,
  highElevatedNeumorphic,
  rainbowText,
  chevronExpand,
  thickUnderline,
  deepBlurGlass,
  indicatorButton,
  fragmentButton,
  simplePill
];
