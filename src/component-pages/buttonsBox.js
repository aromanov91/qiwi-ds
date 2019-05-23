// Dependencies
import React from 'react';
import { render, Artboard, Text, View, Image, makeSymbol } from 'react-sketchapp';
import designSystem from '../designSystem';
import type { DesignSystem } from '../designSystem';
import RegularButton from '../components/elements/ui/regularButton';
import ProviderHeader from '../components/elements/payment/providerHeader';


// Component design
type P = {
  title: string,
  description: string,
  children?: any,
};

const ButtonsBox = ({ title, description, children }: P) => (
  <View style={[designSystem.shadows.ShadowZ1,{
    width: 680,
    backgroundColor: designSystem.colors.BackgroundSecondary,
    paddingTop: 44,
    paddingRight: 44,
    paddingBottom: 48,
    paddingLeft: 44,
    borderRadius: 10,
  }]}>
    <RegularButton txt="Button"></RegularButton>

  </View>
);



// Exporting
export default ButtonsBox;
