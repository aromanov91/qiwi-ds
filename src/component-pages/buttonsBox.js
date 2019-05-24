// Dependencies
import React from 'react';
import { Text, View } from 'react-sketchapp';
import designSystem from '../designSystem';
import type { DesignSystem } from '../designSystem';
import RegularButton from '../components/elements/ui/regularButton';
import {SimpleButtonAccent, SimpleButtonNormal} from '../components/elements/ui/Buttons'


const ButtonsBox = () => (
  <View style={{
    alignSelf: 'flex-start',
    // justifyContent: 'top',
    // width: 1120,
    paddingTop: 60,
    paddingRight: 80,
    paddingBottom: 96,
    paddingLeft: 96,

  }}>

    <SimpleButtonAccent >dfd</SimpleButtonAccent>

    <SimpleButtonNormal >dfd</SimpleButtonNormal>

    <RegularButton txt="Button"></RegularButton>
    
  </View>
);





// Exporting
export default ButtonsBox;
