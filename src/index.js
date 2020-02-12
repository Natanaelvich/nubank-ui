import React from 'react';

import {StatusBar} from 'react-native';
import Routes from './routes';

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor="#8b10ae" barStyle="light-content" />
      <Routes />
    </>
  );
}
