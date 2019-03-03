import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from '../atoms';
import MyIcon from '@assets/config/icon-font.js';

const MessageModal = ({ icon, title, text, buttonSelect, buttonCancel }) => {
  return (
    <Card>
      <CardSection>
        <MyIcon />
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Button></Button>
        <Button></Button>
      </CardSection>
    </Card>
  );
};

export default { MessageModal };
