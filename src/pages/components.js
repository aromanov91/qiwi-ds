/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import PropTypes from 'prop-types';
import { render, StyleSheet, TextStyles, View, Text, Artboard } from 'react-sketchapp';
import designSystem from '../designSystem';
import type { DesignSystem } from '../designSystem';
import PaymentBox from '../components/payment/paymentBox';
import ButtonsBox from '../component-pages/buttonsBox';
import Header from '../components/header/ds-header'

const Components = () => {
  return (
    <Artboard name="Components" style={{
      width: 5000,
      height: 3000,
      padding: designSystem.spacing * 10,
      backgroundColor: designSystem.colors.GrayLine,
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    }}>

      <Artboard name="Buttons" style={{
        width: 1280,
        height: 900,
        marginBottom: designSystem.spacing * 4,
        backgroundColor: designSystem.colors.Background,
        alignItems: 'center',
        justifyContent: 'top',
        margin: designSystem.spacing * 10,
        
      }}>
        <Header
          logo = "Buttons"
        >
        </Header>
        <ButtonsBox
        >
        </ButtonsBox>

      </Artboard>


      <Artboard name="Text fields" style={{
        width: 1280,
        height: 900,
        marginBottom: designSystem.spacing * 4,
        backgroundColor: designSystem.colors.Background,
        alignItems: 'center',
        justifyContent: 'top',
        margin: designSystem.spacing * 10,
        
      }}>
        <Header
          logo = "Text fields"
        >
        </Header>
        <PaymentBox
          title="Альфа-банк"
          description="Форма оплаты"
        >
        </PaymentBox>
        
      </Artboard>

      
    </Artboard>
  
  );
}

export default Components;