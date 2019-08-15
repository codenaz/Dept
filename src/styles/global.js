import { css } from '@emotion/core';

export const globalStyles = css`
  html {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Teko&display=swap');
    font-family: 'Teko', sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
