// Importing the necessary dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../../designSystem';
import type { DesignSystem } from '../../../designSystem';

// Element design, including an editable placeholder
type P = {
  title: string,
  option1: string,
  discription1: string,
  option2: string,
  discription2: string,
};

const Radio = ({ title, option1, option2, discription1, discription2 }: P) => (

  <View style={{
    marginBottom: 0,
    marginTop: 16,
  }}>

    <Text style={[designSystem.fonts.TitleH5, {  marginBottom: designSystem.space.l,
    }]}>
      {title}
    </Text>

    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>

      <View style={{
        backgroundColor: designSystem.colors.GrayLine,
        width: 24,
        height: 24,
        borderRadius: 12,
      }}>
      </View>

      <View style={{
        marginLeft: 12,
      }}>
        <Text style={[designSystem.fonts.Body, {
        }]}>
          {option1}
        </Text>

        <Text style={[designSystem.fonts.SmallBody, {
        }]}>
          {discription1}
        </Text>

      </View>

    </View>


  </View>
);

export default Radio;
