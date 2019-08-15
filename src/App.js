import React from 'react';
import RouterComponent from './Router';
import { Global } from '@emotion/core';
import { globalStyles } from './styles/global';
import { Normalize } from 'styled-normalize';

function App() {
  return (
    <>
      <Normalize />
      <Global styles={globalStyles} />
      <RouterComponent />
    </>
  );
}

export default App;
