// Importing dependencies
import processColor from './processColor';
import type { Color } from './processColor';

// Defyining Colors
export const colors = {
  Background: '#F5F5F5',
  BackgroundSecondary: '#FFF',
  BackgroundWarning: '#555',
  White: '#FFF',
  Black: '#000',
  Gray: '#999',
  GrayLine: '#CCC',
  GrayDivider: '#E6E6E6',
  Orange: '#FF8C00',
  Link: '#0055BB',
  Success: '#4BBD5C',
  Error: '#D0021B',
  Graphite: '#2D3540',
  Text: '#000',
  TextSecondary:'#666'
};

// Defyining Fonts styles and variables
const typeSizes = [32, 30, 26, 20, 18, 16, 13];

export const spacing = 4;

export const space = {
  xxxs: '4',
  xxs: '8',
  xs: '12',
  s: '16',
  m: '24',
  l: '32',
  xl: '48',
  xxl: '96',
  xxxl: '144'
}

const fontFamilies = {
  display: 'Museo Sans Cyrl',
  body: 'Museo Sans Cyrl',
};

const fontWeights = {
  regular: '300',
  bold: '500',
  semiBold: '700',
  extraBold: '900',
};

export const fonts = {
  TitleH1: {
    color: colors.Text,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.extraBold,
    lineHeight: 36,
    opacity: 0.9,
  },
  TitleH2: {
    color: colors.Text,
    fontSize: typeSizes[1],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.extraBold,
    lineHeight: 36,
  },
  TitleH3: {
    color: colors.Text,
    fontSize: typeSizes[2],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.extraBold,
    lineHeight: 32,
  },
  TitleH4: {
    color: colors.Text,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.semiBoldBold,
    lineHeight: 24,
  },
  TitleH5: {
    color: colors.Text,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.semiBoldBold,
    lineHeight: 24,
  },
  TitleH6: {
    color: colors.Text,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.semiBold,
    lineHeight: 24,
  },
  TitleH7: {
    color: colors.Text,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.semiBold,
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  Body: {
    color: colors.Text,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 4,
  },
  LeadBody: {
    color: colors.Text,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 4,

  },
  SmallBody: {
    color: colors.TextSecondary,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  },
  Field: {
    color: colors.TextSecondary,
    fontSize: 20,
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Label: {
    color: colors.TextSecondary,
    fontSize: typeSizes[6],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 16,
  },
  AscendedButtonText: {
    color: colors.White,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.semiBold,
    lineHeight: 24,
  },
  
};

export const shadows = {
  ShadowZ1: {
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.08,
  },
};
// Exporting
export default {
  colors: Object.keys(colors).reduce(
    (acc, name) => ({
      ...acc,
      [name]: processColor(colors[name]),
    }),
    {},
  ),
  colors,
  fonts,
  spacing,
  shadows,
  space,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: Color },
};
