import React from 'react';
import { Flex, Box } from 'reflexbox';
import PropTypes from 'prop-types';

export const ClientImage = props => {
  return (
    <Flex width={[1 / 2, 1 / 2, 1 / 4]} p={['1.5rem']} justifyContent='center'>
      <Box as='img' src={props.logo} width='5rem' />
    </Flex>
  );
};

ClientImage.propTypes = {
  logo: PropTypes.any
};
