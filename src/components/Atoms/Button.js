import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { black } from '../../styles/colors';

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${props => {
    if (props.width) {
      return css`
        width: ${props.width};
      `;
    }
  }};
  ${props => {
    if (props.color) {
      return css`
        color: ${props.color};
      `;
    }
  }};
  ${props => {
    if (props.fontSize) {
      return css`
        font-size: ${props.fontSize};
      `;
    }
  }};
`;

export const MenuButton = styled(Button)`
  font-size: ${props => (props.tiny ? '1rem' : '3rem')};
  @media (min-width: 900px) {
    font-size: ${props => (props.tiny ? '1rem' : '6.8rem')};
  }
  ${props =>
    props.tiny &&
    css`
      line-height: 1;
    `};
  ${props =>
    props.tiny &&
    css`
      letter-spacing: normal;
    `}
  ${props =>
    props.lowOpacity &&
    css`
      opacity: 0.5;
    `}
`;

export const PrimaryButton = styled(Button)`
  background-color: ${black};
  color: white;
  justify-content: center;
  padding: 0.6rem 0;
  margin: 1rem 0;
  font-size: 16px;
  font-family: Arial;
  line-height: 2;
  font-weight: bold;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #1a18f7;
`;
