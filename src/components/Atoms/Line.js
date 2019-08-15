import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { black } from '../../styles/colors';

const Line = styled.div`
  border-bottom: 1px solid ${props => props.color || black};
  ${props => {
    if (props.width) {
      return `width: ${props.width};`;
    }
  }};
`;

export default function LineComponent({ style, color, width }) {
  return <Line color={color} width={width} style={style} />;
}

LineComponent.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  style: PropTypes.object
};
