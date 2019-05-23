// Importing the necessary dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

// Element design, including an editable "txt"
type P = {
  txt: string,
  children?: any,
};
const RegularButton = ({txt, children}: P) => (
  <View style={{
    alignSelf: 'flex-start',
    flex: 1,
    backgroundColor: designSystem.colors.Orange,
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 42,
    paddingTop: 18,
    borderRadius: 100,
    minWidth: 120,
    
  }}>
    <Text style={[designSystem.fonts.AscendedButtonText,{
      alignSelf: "center",
      }]}>
        {txt}
    </Text>
  </View>
);
// Here we export the element as "regularButton"
export default RegularButton;