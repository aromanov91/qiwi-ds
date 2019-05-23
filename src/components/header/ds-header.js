// Dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem, { spacing } from '../../designSystem';
import type { DesignSystem } from '../../designSystem';

// Component design
type P = {
  logo: string,
};

const DSHeader = ({ logo }: P) => (
  <View style={{
    width: 1280,
    backgroundColor: designSystem.colors.GrayDivider,
    paddingTop: 96,
    paddingLeft: 80,
    paddingBottom: 48,
    borderRadius: 0,
    //shadowOffset: { width: 0, height: 1 },
    //shadowRadius: 2,
    shadowOpacity: 0.08,
    marginBottom: 20,
  }}>
    <Text style={[designSystem.fonts.TitleH1,{
      marginBottom: 0,
      }]}>
        {logo}
    </Text>
  </View>
);

// Exporting
export default DSHeader;
