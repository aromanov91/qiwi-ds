// Importing dependencies
import processColor from '../../processColor';
import type { Color } from '../../processColor';
import type { DesignSystem } from '../../designSystem';
import Pijma from '../../pijma';

export const colors = {
  Haus: '#F3F4F4',
};
 
// Title
const SizesTitle            = [48, 40];
const HeightTitle           = [56, 48];

// Heading
const SizesHeading          = [32, 28, 24, 20, 16];
const LineHeightHeading     = [36, 32, 28, 24, 20];

// CAPTION 
const SizesCaption          = [14];
const LineHeightCaption     = [20];

// Body
const SizesBody             = [20, 16, 14];
const LineHeightBody        = [32, 24, 20];
const LineHeightBodyCompact = [28, 20, 16];


const fontFamilies = {
  default: 'Museo Sans Cyrl',
};

const fontWeights = {
  regular: '300',
  bold: '500',
  semibold: '600',
  extraBold: '900',
};

export const Heading = {

  'Title 1 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[0],
  },
  'Title 2 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
  },
  'Title 2 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
  },


  // ----------------------------------

  'Title 1 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[0],
    textAlign: 'center'
  },
  'Title 2 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
    textAlign: 'center'
  },

  // ---------------------------------

  'Title 1 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[0],
    textAlign: 'right'
  },
  'Title 2 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
    textAlign: 'right'
  },

  // Inverse ---------------------------

  'Title 1 / Inverse / Left / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesTitle[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[0],
  },
  'Title 2 / Inverse / Left / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
  },

  // ----------------------------------

  'Title 1 / Inverse / Center / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesTitle[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[0],
    textAlign: 'center'
  },
  'Title 2 / Inverse / Center / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
    textAlign: 'center'
  },

  // ---------------------------------

  'Title 1 / Inverse / Right / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesTitle[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[0],
    textAlign: 'right'
  },
  'Title 2 / Inverse / Right / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
    textAlign: 'right'
  },

  // ---------------------------------
  // Heading
  // ---------------------------------

  'H1 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
  },
  'H2 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
  },
  'H3 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
  },
  'H4 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
  },
  'H5 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
  },
  
  // ---------------------------------- 

  'H1 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
    textAlign: 'center'
  },
  'H2 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
    textAlign: 'center'
  },
  'H3 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
    textAlign: 'center'
  },
  'H4 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
    textAlign: 'center'
  },
  'H5 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
    textAlign: 'center'
  },

  // ---------------------------------- 

  'H1 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
    textAlign: 'right'
  },
  'H2 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
    textAlign: 'right'
  },
  'H3 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
    textAlign: 'right'
  },
  'H4 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
    textAlign: 'right'
  },
  'H5 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
    textAlign: 'right'
  },

  'H1 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
  },
  'H2 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
  },
  'H3 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
  },
  'H4 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
  },
  'H5 / Default / Left / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
  },
  
  // ---------------------------------- 

  'H1 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
    textAlign: 'center'
  },
  'H2 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
    textAlign: 'center'
  },
  'H3 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
    textAlign: 'center'
  },
  'H4 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
    textAlign: 'center'
  },
  'H5 / Default / Center / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
    textAlign: 'center'
  },

  // ---------------------------------- 

  'H1 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
    textAlign: 'right'
  },
  'H2 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
    textAlign: 'right'
  },
  'H3 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
    textAlign: 'right'
  },
  'H4 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
    textAlign: 'right'
  },
  'H5 / Default / Right / Desktop': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
    textAlign: 'right'
  },

  //  White----------------------------------

  'H1 / Inverse / Left / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
  },
  'H2 / Inverse / Left / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
  },
  'H3 / Inverse / Left / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
  },
  'H4 / Inverse / Left / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
  },
  'H5 / Inverse / Left / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
  },
  
  // ---------------------------------- 

  'H1 / Inverse / Center / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
    textAlign: 'center'
  },
  'H2 / Inverse / Center / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
    textAlign: 'center'
  },
  'H3 / Inverse / Center / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
    textAlign: 'center'
  },
  'H4 / Inverse / Center / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
    textAlign: 'center'
  },
  'H5 / Inverse / Center / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
    textAlign: 'center'
  },
  
  // ---------------------------------- 

  'H1 / Inverse / Right / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[0],
    textAlign: 'right'
  },
  'H2 / Inverse / Right / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[1],
    textAlign: 'right'
  },
  'H3 / Inverse / Right / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: LineHeightHeading[2],
    textAlign: 'right'
  },
  'H4 / Inverse / Right / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[3],
    textAlign: 'right'
  },
  'H5 / Inverse / Right / Desktop': {
    color: Pijma.colors.White,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightHeading[4],
    textAlign: 'right'
  },


  'CAPTION / Default / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
  },
  'CAPTION / Default / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
    textAlign: 'center'
  },
  'CAPTION / Default / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
    textAlign: 'right'
  },
  'CAPTION / Support / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
  },
  'CAPTION / Support / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
    textAlign: 'center'
  },
  'CAPTION / Support / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
    textAlign: 'right'
  },
  'CAPTION / Inverse / Left': {
    color: Pijma.colors.White,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
  },
  'CAPTION / Inverse / Center': {
    color: Pijma.colors.White,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
    textAlign: 'center'
  },
  'CAPTION / Inverse / Right': {
    color: Pijma.colors.White,
    fontSize: SizesCaption[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.semibold,
    lineHeight: LineHeightCaption[0],
    letterSpacing: 1.5,
    textAlign: 'right'
  },


  // ------------------------------------------------------------
  // Body L Default                                     ---------
  // ------------------------------------------------------------

  'Body L / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },
  // ---------------------------------
  // Body Bold
  // ---------------------------------

  'Body L / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Default / Bold / Compact / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Default / Bold / Compact / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Default / Bold / Compact / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Default / Bold / Compact / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Default / Bold / Compact / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Default / Bold / Compact / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Default / Bold / Compact / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Default / Bold / Compact / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Default / Bold / Compact / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Default / Regular / Compact / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Default / Regular / Compact / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Default / Regular / Compact / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Default / Regular / Compact / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Default / Regular / Compact / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Default / Regular / Compact / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Default / Regular / Compact / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Default / Regular / Compact / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Default / Regular / Compact / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },
  // ---------------------------------
  // Body Normal
  // ---------------------------------

  'Body L / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Default / Bold / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Default / Bold / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Default / Bold / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Default / Regular / Normal / Left': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Default / Regular / Normal / Center': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Default / Regular / Normal / Right': {
    color: Pijma.colors.Black,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // ------------------------------------------------------------
  // Body L Inverse                                     ---------
  // ------------------------------------------------------------

  'Body L / Inverse / Bold / Normal / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Inverse / Bold / Normal / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Inverse / Bold / Normal / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Inverse / Bold / Normal / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Inverse / Bold / Normal / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Inverse / Bold / Normal / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Inverse / Bold / Normal / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Inverse / Bold / Normal / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Inverse / Bold / Normal / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Inverse / Regular / Normal / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Inverse / Regular / Normal / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Inverse / Regular / Normal / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Inverse / Regular / Normal / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Inverse / Regular / Normal / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Inverse / Regular / Normal / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Inverse / Regular / Normal / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Inverse / Regular / Normal / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Inverse / Regular / Normal / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Inverse / Bold / Compact / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Inverse / Bold / Compact / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Inverse / Bold / Compact / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Inverse / Bold / Compact / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Inverse / Bold / Compact / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Inverse / Bold / Compact / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Inverse / Bold / Compact / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Inverse / Bold / Compact / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Inverse / Bold / Compact / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Inverse / Regular / Compact / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Inverse / Regular / Compact / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Inverse / Regular / Compact / Left': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Inverse / Regular / Compact / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Inverse / Regular / Compact / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Inverse / Regular / Compact / Center': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Inverse / Regular / Compact / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Inverse / Regular / Compact / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Inverse / Regular / Compact / Right': {
    color: Pijma.colors.White,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },
  // ------------------------------------------------------------
  // Body L Support                                     ---------
  // ------------------------------------------------------------

  'Body L / Support / Bold / Normal / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Support / Bold / Normal / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Support / Bold / Normal / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Support / Bold / Normal / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Support / Bold / Normal / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Support / Bold / Normal / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Support / Bold / Normal / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Support / Bold / Normal / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Support / Bold / Normal / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Support / Regular / Normal / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Support / Regular / Normal / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Support / Regular / Normal / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Support / Regular / Normal / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Support / Regular / Normal / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Support / Regular / Normal / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Support / Regular / Normal / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Support / Regular / Normal / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Support / Regular / Normal / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Support / Bold / Compact / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Support / Bold / Compact / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Support / Bold / Compact / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Support / Bold / Compact / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Support / Bold / Compact / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Support / Bold / Compact / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Support / Bold / Compact / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Support / Bold / Compact / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Support / Bold / Compact / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Support / Regular / Compact / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Support / Regular / Compact / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Support / Regular / Compact / Left': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Support / Regular / Compact / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Support / Regular / Compact / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Support / Regular / Compact / Center': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Support / Regular / Compact / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Support / Regular / Compact / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Support / Regular / Compact / Right': {
    color: Pijma.colors.Gray1,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },
  
  // ------------------------------------------------------------
  // Body L Failure                                     ---------
  // ------------------------------------------------------------

  'Body L / Failure / Bold / Normal / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Failure / Bold / Normal / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Failure / Bold / Normal / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Failure / Bold / Normal / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Failure / Bold / Normal / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Failure / Bold / Normal / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Failure / Bold / Normal / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Failure / Bold / Normal / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Failure / Bold / Normal / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Failure / Regular / Normal / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Failure / Regular / Normal / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Failure / Regular / Normal / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Failure / Regular / Normal / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Failure / Regular / Normal / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Failure / Regular / Normal / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Failure / Regular / Normal / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Failure / Regular / Normal / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Failure / Regular / Normal / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Failure / Bold / Compact / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Failure / Bold / Compact / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Failure / Bold / Compact / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Failure / Bold / Compact / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Failure / Bold / Compact / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Failure / Bold / Compact / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Failure / Bold / Compact / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Failure / Bold / Compact / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Failure / Bold / Compact / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Failure / Regular / Compact / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Failure / Regular / Compact / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Failure / Regular / Compact / Left': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Failure / Regular / Compact / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Failure / Regular / Compact / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Failure / Regular / Compact / Center': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Failure / Regular / Compact / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Failure / Regular / Compact / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Failure / Regular / Compact / Right': {
    color: Pijma.colors.Red,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },
  // ------------------------------------------------------------
  // Body L Success                                     ---------
  // ------------------------------------------------------------

  'Body L / Success / Bold / Normal / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Success / Bold / Normal / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Success / Bold / Normal / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Success / Bold / Normal / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Success / Bold / Normal / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Success / Bold / Normal / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Success / Bold / Normal / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Success / Bold / Normal / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Success / Bold / Normal / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Success / Regular / Normal / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Success / Regular / Normal / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Success / Regular / Normal / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Success / Regular / Normal / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Success / Regular / Normal / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Success / Regular / Normal / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Success / Regular / Normal / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Success / Regular / Normal / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Success / Regular / Normal / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Success / Bold / Compact / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Success / Bold / Compact / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Success / Bold / Compact / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Success / Bold / Compact / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Success / Bold / Compact / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Success / Bold / Compact / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Success / Bold / Compact / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Success / Bold / Compact / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Success / Bold / Compact / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Success / Regular / Compact / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Success / Regular / Compact / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Success / Regular / Compact / Left': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Success / Regular / Compact / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Success / Regular / Compact / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Success / Regular / Compact / Center': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Success / Regular / Compact / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Success / Regular / Compact / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Success / Regular / Compact / Right': {
    color: Pijma.colors.Green,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },
  
  // ------------------------------------------------------------
  // Body L Warning                                     ---------
  // ------------------------------------------------------------

  'Body L / Warning / Bold / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Warning / Bold / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Warning / Bold / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Warning / Bold / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Warning / Bold / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Warning / Bold / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Warning / Bold / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Warning / Bold / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Warning / Bold / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Warning / Regular / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Warning / Regular / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Warning / Regular / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Warning / Regular / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Warning / Regular / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Warning / Regular / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Warning / Regular / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Warning / Regular / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Warning / Regular / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Warning / Bold / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Warning / Bold / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Warning / Bold / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Warning / Bold / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Warning / Bold / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Warning / Bold / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Warning / Bold / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Warning / Bold / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Warning / Bold / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Warning / Regular / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Warning / Regular / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Warning / Regular / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Warning / Regular / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Warning / Regular / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Warning / Regular / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Warning / Regular / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Warning / Regular / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Warning / Regular / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },
  
  // ------------------------------------------------------------
  // Body L Link                                     ---------
  // ------------------------------------------------------------

  'Body L / Link / Default / Bold / Normal / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Link / Default / Bold / Normal / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Link / Default / Bold / Normal / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Link / Default / Bold / Normal / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Link / Default / Bold / Normal / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Link / Default / Bold / Normal / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Link / Default / Bold / Normal / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Link / Default / Bold / Normal / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Link / Default / Bold / Normal / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Link / Default / Regular / Normal / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Link / Default / Regular / Normal / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Link / Default / Regular / Normal / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Link / Default / Regular / Normal / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Link / Default / Regular / Normal / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Link / Default / Regular / Normal / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Link / Default / Regular / Normal / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Link / Default / Regular / Normal / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Link / Default / Regular / Normal / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Link / Default / Bold / Compact / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Link / Default / Bold / Compact / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Link / Default / Bold / Compact / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Link / Default / Bold / Compact / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Link / Default / Bold / Compact / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Link / Default / Bold / Compact / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Link / Default / Bold / Compact / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Link / Default / Bold / Compact / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Link / Default / Bold / Compact / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Link / Default / Regular / Compact / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Link / Default / Regular / Compact / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Link / Default / Regular / Compact / Left': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Link / Default / Regular / Compact / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Link / Default / Regular / Compact / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Link / Default / Regular / Compact / Center': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Link / Default / Regular / Compact / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Link / Default / Regular / Compact / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Link / Default / Regular / Compact / Right': {
    color: Pijma.colors.Link,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // ------------------------------------------------------------
  // Body L Link Hover                                  ---------
  // ------------------------------------------------------------

  'Body L / Link / Hover / Bold / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Link / Hover / Bold / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Link / Hover / Bold / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Link / Hover / Bold / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Link / Hover / Bold / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Link / Hover / Bold / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },
  'Body L / Link / Hover / Bold / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Link / Hover / Bold / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Link / Hover / Bold / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Link / Hover / Regular / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
  },
  'Body M / Link / Hover / Regular / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
  },
  'Body S / Link / Hover / Regular / Normal / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
  },
  'Body L / Link / Hover / Regular / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'center'
  },
  'Body M / Link / Hover / Regular / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'center'
  },
  'Body S / Link / Hover / Regular / Normal / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'center'
  },

  'Body L / Link / Hover / Regular / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[0],
    textAlign: 'right'
  },
  'Body M / Link / Hover / Regular / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[1],
    textAlign: 'right'
  },
  'Body S / Link / Hover / Regular / Normal / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBody[2],
    textAlign: 'right'
  },

  // Body Compact --------------------------

  'Body L / Link / Hover / Bold / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Link / Hover / Bold / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Link / Hover / Bold / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Link / Hover / Bold / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Link / Hover / Bold / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Link / Hover / Bold / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },
  'Body L / Link / Hover / Bold / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Link / Hover / Bold / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Link / Hover / Bold / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.bold,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },

  // --------------------------------
  
  'Body L / Link / Hover / Regular / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
  },
  'Body M / Link / Hover / Regular / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
  },
  'Body S / Link / Hover / Regular / Compact / Left': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
  },
  'Body L / Link / Hover / Regular / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'center'
  },
  'Body M / Link / Hover / Regular / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'center'
  },
  'Body S / Link / Hover / Regular / Compact / Center': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'center'
  },

  'Body L / Link / Hover / Regular / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[0],
    textAlign: 'right'
  },
  'Body M / Link / Hover / Regular / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[1],
    textAlign: 'right'
  },
  'Body S / Link / Hover / Regular / Compact / Right': {
    color: Pijma.colors.Orange,
    fontSize: SizesBody[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.regular,
    lineHeight: LineHeightBodyCompact[2],
    textAlign: 'right'
  },


};


// Exporting
export default { colors: Object.keys(colors).reduce(
  (acc, name) => ({
    ...acc,
    [name]: processColor(colors[name]),
  }),
  {},
),
  Heading,

};

export type TypographyDesktop = {
  Heading: any,

  colors: { [key: string]: Color },
};
