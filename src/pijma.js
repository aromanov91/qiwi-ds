// Importing dependencies
import processColor from './processColor';
import type { Color } from './processColor';

// Defyining Colors
export const colors = {
  BrandColor: '#FF8C00',
  BrandColorHover: '#FF8200',
  Link: '#0055BB',
  Green: '#4BBD5C',
  Yellow: '#FFB800',
  Orange: '#FF8C00',
  Red: '#D0021B',
  Black: '#000',
  Gray1:'#666',
  Gray2: '#999',
  Gray3: '#CCC',
  Gray4: '#E6E6E6',
  Gray5: '#F5F5F5',
  White: '#FFF',
  Graphite: '#2D3540',
};

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
  spacing,
  space,
};

export type Pijma = {
  fonts: any,
  colors: { [key: string]: Color },
};
