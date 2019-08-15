import React, { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import { brownGrey, black, grey } from '../../styles/colors';
import { ArrowDown, ArrowUp } from '../Atoms/arrow';
import PropTypes from 'prop-types';

export default function DropDown(props) {
  const [toggled, setToggled] = useState(false);
  return (
    <Flex
      ml={[2, 2, 4]}
      mt={['1.25rem', '1.25rem', '2.5rem']}
      onClick={() => setToggled(toggleState => !toggleState)}
      sx={{ cursor: 'pointer' }}
    >
      <Box
        color={brownGrey}
        mr={1}
        fontSize={['1.5rem', '1.5rem', '1.87rem']}
        lineHeight={['1rem', '1rem', '1.07rem']}
      >
        {props.label}
      </Box>
      <Flex flexDirection='column' sx={{ position: 'relative' }}>
        <Flex
          sx={{
            borderBottom: `1px solid ${black}`
          }}
          alignItems='center'
        >
          <Box
            fontSize={['1.5rem', '1.5rem', '1.87rem']}
            lineHeight={['1rem', '1rem', '1.07rem']}
          >
            {props.options[props.value]}
          </Box>
          {toggled ? (
            <ArrowUp color={black} tiny />
          ) : (
            <ArrowDown color={black} tiny />
          )}
        </Flex>
        {toggled && (
          <Flex
            as='ul'
            flexDirection='column'
            bg='white'
            p={1}
            fontSize='1.5rem'
            sx={{
              listStyle: 'none',
              position: 'absolute',
              top: 0,
              zIndex: 1,
              right: 0,
              border: `0.1px solid ${grey}`,
              cursor: 'pointer'
            }}
          >
            {Object.keys(props.options)
              .filter(option => option.toString() !== props.value.toString())
              .map((option, index) => (
                <Box onClick={() => props.onSelect(option)} key={index} as='li'>
                  {props.options[option]}
                </Box>
              ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

DropDown.propTypes = {
  label: PropTypes.string,
  extraText: PropTypes.string,
  options: PropTypes.object,
  onSelect: PropTypes.func,
  value: PropTypes.any
};
