/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import PropTypes from 'prop-types';
import { render, StyleSheet, TextStyles, View, Text, Artboard } from 'react-sketchapp';
import designSystem from '../designSystem';
import type { DesignSystem } from '../designSystem';
import PaymentBox from '../components/payment/paymentBox';
import Header from '../components/header/l'

const Payment = () => {
  return (
    <Artboard name="Payment" style={{
      width: 1440,
      height: 900,
      marginBottom: designSystem.spacing * 4,
      backgroundColor: designSystem.colors.Background,
      alignItems: 'center',
      justifyContent: 'top',
      
    }}>
      <Header
        logo = "QIWI"
      >
      </Header>
      <PaymentBox
        title="Альфа-банк"
        description="Форма оплаты"
      >
      </PaymentBox>
    </Artboard>
  
  );
}

export default Payment;
