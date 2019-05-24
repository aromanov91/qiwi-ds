import React from 'react';
import { View, Text, makeSymbol } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

export const border = {
  width: 1,
  color: designSystem.colors.GrayLine,
};

const buttonSizes = {
  Accent: {
    height: 60,
    radius: 30,
    paddingX: 36,
    paddingY: 18,
    minWidth: 200,
  },
  Normal: {
    height: 48,
    radius: 24,
    paddingX: 28,
    paddingY: 18,
    minWidth: 148,
  },
  Minor: {
    height: 40,
    radius: 20,
    paddingX: 24,
    paddingY: 18,
    minWidth: 100,
  },
};

const buttonColor = {
  Brand: {
    color: designSystem.colors.Brand,
    textColor: designSystem.colors.White
  },
  Simple: {
    color: designSystem.colors.Brand,
    borderColor: designSystem.colors.borderColor,
    textColor: designSystem.colors.Black
  },
};

export const SimpleButtonAccent = () => (
  <View name="Button Base" style={{
    alignSelf: 'flex-start',
    backgroundColor: buttonColor.Simple.color,
    borderColor: border.color,
    borderWidth: border.width,
    paddingLeft: buttonSizes.Accent.paddingX,
    paddingRight: buttonSizes.Accent.paddingX,
    paddingBottom: buttonSizes.Accent.paddingY,
    paddingTop: buttonSizes.Accent.paddingY,
    borderRadius: buttonSizes.Accent.radius,
    minWidth: buttonSizes.Accent.minWidth,
    minHeight: buttonSizes.Accent.height,
  }}>
    <Text name="ButtonTitle" style={[designSystem.fonts.SimpleButtonText,{
      alignSelf: "center",
      }]}>
        Button
    </Text>
  </View>
);

makeSymbol(SimpleButtonAccent, 'Buttons/Simple/Accent');

export const SimpleButtonNormal = () => (
  <View name="Button Base" style={{
    alignSelf: 'flex-start',
    backgroundColor: buttonColor.Simple.color,
    borderColor: border.color,
    borderWidth: border.width,
    paddingLeft: buttonSizes.Normal.paddingX,
    paddingRight: buttonSizes.Normal.paddingX,
    paddingBottom: buttonSizes.Normal.paddingY,
    paddingTop: buttonSizes.Normal.paddingY,
    borderRadius: buttonSizes.Normal.radius,
    minWidth: buttonSizes.Normal.minWidth,
    minHeight: buttonSizes.Normal.height,
  }}>
    <Text name="ButtonTitle" style={[designSystem.fonts.SimpleButtonText,{
      alignSelf: "center",
      }]}>
        Button
    </Text>
  </View>
);

makeSymbol(SimpleButtonNormal, 'Buttons/Simple/Normal');



// Here we export the element as "regularButton"
export default {SimpleButtonAccent,
                SimpleButtonNormal,
};