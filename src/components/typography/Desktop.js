// Importing dependencies
import processColor from '../../processColor';
import type { Color } from '../../processColor';
import type { DesignSystem } from '../../designSystem';
import Pijma from '../../pijma';
 
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

export const Heading = {
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



// Exporting
export default {
  Heading,
};

export type Fonts = {
  fonts: any,
};
