// Dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem, { spacing } from '../../designSystem';
import type { DesignSystem } from '../../designSystem';

// Component design
type P = {
  logo: string,
};

const Header = ({ logo }: P) => (
  <View style={{
    width: 1440,
    backgroundColor: designSystem.colors.BackgroundSecondary,
    paddingTop: 16,
    paddingLeft: 60,
    paddingBottom: 12,
    borderRadius: 0,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.08,
    marginBottom: 20,
  }}>
    <Text style={[designSystem.fonts.TitleH3,{
      marginBottom: 0,
      }]}>
        {logo}
    </Text>
  </View>
);

// Exporting
export default Header;
