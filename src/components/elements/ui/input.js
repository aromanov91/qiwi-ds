// Importing the necessary dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

// Element design, including an editable placeholder
type P = {
  placeholder: string,
  discription: string,
  helper: string,
};

const Input = ({ placeholder, label, helper }: P) => (

  <View style={{
    marginBottom: 16,
    marginTop: 16,
  }}>
    <Text style={[designSystem.fonts.Label, {
    }]}>
      {label}
    </Text>

    <View style={{
      borderStyle: 'solid',
      borderColor: designSystem.colors.GrayLine,
      borderBottomWidth: 1,
      paddingBottom: 3,
    }}>
      <Text style={[designSystem.fonts.Field, {
      }]}>
        {placeholder}
      </Text>

    </View>

    <Text style={[designSystem.fonts.Label, {
    }]}>
      {helper}
    </Text>

  </View>
);

// Here we export the element as "Input"
export default Input;
