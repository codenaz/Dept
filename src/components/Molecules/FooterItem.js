import React from 'react';
import { Box } from 'reflexbox';
import PropTypes from 'prop-types';

export default function FooterMenuItem(props) {
  return <Box fontSize={['2rem', '2rem', '1rem']}>{props.title}</Box>;
}

FooterMenuItem.propTypes = {
  title: PropTypes.string
};
