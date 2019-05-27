// Importing dependencies
import processColor from '../../processColor';
import type { Color } from '../../processColor';
import type { DesignSystem } from '../../designSystem';
import Pijma from '../../pijma';

export const colors = {
  Haus: '#F3F4F4',
};
 
// Title
const SizesTitle            = [48, 56];
const HeightTitle           = [40, 48];

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
  semiBold: '700',
  extraBold: '900',
};

export const Title = {
  '1': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[0],
  },
  '2': {
    color: Pijma.colors.Black,
    fontSize: SizesTitle[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: HeightTitle[1],
  },
};

export const Heading = {
  'H1': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[0],
  },
  'H2': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[1],
  },
  'H3': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[2],
  },
  'H4': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[3],
  },
  'H5': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[4],
  },
};

export const HeadingCenter = {
  'H1': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[0],
    textAlign: 'center',
  },
  'H2': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[1],
    textAlign: 'center',
  },
  'H3': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[2],
    textAlign: 'center',
  },
  'H4': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[3],
    textAlign: 'center',
  },
  'H5': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[4],
    textAlign: 'center',
  },
};


export const HeadingRight = {
  'H1': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[0],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[0],
    textAlign: 'right',
  },
  'H2': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[1],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[1],
    textAlign: 'right',
  },
  'H3': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[2],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[2],
    textAlign: 'right',
  },
  'H4': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[3],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[3],
    textAlign: 'right',
  },
  'H5': {
    color: Pijma.colors.Black,
    fontSize: SizesHeading[4],
    fontFamily: fontFamilies.default,
    fontWeight: fontWeights.extraBold,
    lineHeight: SizesHeading[4],
    textAlign: 'right',
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
  HeadingCenter,
  HeadingRight,
};

export type TypographyDesktop = {
  Heading: any,
  colors: { [key: string]: Color },
};
