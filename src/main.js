/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Text, Artboard } from 'react-sketchapp';
//import designSystem from './designSystem';
//import type { DesignSystem } from './designSystem';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Components from './pages/components';

export default (context: any) => {

  render(<Components />, context.document.currentPage());

}
