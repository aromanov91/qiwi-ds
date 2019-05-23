// Dependencies
import React from 'react';
import { View, Text } from 'react-sketchapp';
import designSystem from '../../designSystem';
import type { DesignSystem } from '../../designSystem';
import Input from '../elements/ui/input';
import RegularButton from '../elements/ui/regularButton';
import ProviderHeader from '../elements/payment/providerHeader';
import Radio from '../elements/ui/radio';

// Component design
type P = {
  title: string,
  description: string,
  children?: any,
};

const PaymentBox = ({ title, description, children }: P) => (
  <View style={[designSystem.shadows.ShadowZ1,{
    width: 680,
    backgroundColor: designSystem.colors.BackgroundSecondary,
    paddingTop: 44,
    paddingRight: 44,
    paddingBottom: 48,
    paddingLeft: 44,
    borderRadius: 10,
  }]}>
  
    <ProviderHeader provider="Сбербанк" discription="Мега банк" ></ProviderHeader>
    <Input placeholder="Email address" label="fdfss" helper="fs"></Input>
    <Input placeholder="Ищо" label="Тип платежа" helper="Херня"></Input>
    <RegularButton txt="Оплатить"></RegularButton>
    <Radio title="Радио" option1="fsdfs" discription1="sfdgsd"></Radio>
  
  </View>
);

// Exporting
export default PaymentBox;
