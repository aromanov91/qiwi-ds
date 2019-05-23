// Importing the necessary dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

// Element design, including an editable placeholder
type P = {
  provider: string,
  discription: string,
};

const ProviderHeader = ({ provider, discription }: P) => (

  <View style={{
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flexDirection: 'row',
    //flex: 1,
    //height: 64,
    //alignItems: 'center',
    //justifyContent: 'flex-start',
  }}>

    <View style={{
      backgroundColor: designSystem.colors.Graphite,
      width: 64,
      height: 64,
      borderRadius: 32,
    }}>
    </View>

    <View style={{
      marginTop: 4,
      marginLeft: 24,
      height: 64,
    }}>
      <Text style={[designSystem.fonts.TitleH1, {
      }]}>
        {provider}
      </Text>

      <Text style={[designSystem.fonts.SmallBody, {
      }]}>
        {discription}
      </Text>

    </View>


  </View>
);

// Here we export the element as "Input"
export default ProviderHeader;
