/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Text, Artboard } from 'react-sketchapp';
import designSystem from './designSystem';
import type { DesignSystem } from './designSystem';
import typographyDesktop from './components/typography/Desktop';
import type { TypographyDesktop } from './components/typography/Desktop';
import Components from './pages/components';

export default () => {
  TextStyles.create(
    {
      context,
      clearExistingStyles: true,
    },
    typographyDesktop.Heading,
  );
  
  render(<Components system={typographyDesktop} />, context.document.currentPage());

}
