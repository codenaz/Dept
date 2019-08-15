import React from 'react';
import { Flex } from 'reflexbox';
import PropTypes from 'prop-types';
import { ArrowRight } from './arrow';
import Line from './Line';
import { MenuButton } from './Button';

export default function MenuItem(props) {
  return (
    <>
      <Flex
        justifyContent='flex-end'
        alignItems='center'
        color='white'
        mt='0.2rem'
      >
        {props.active ? <ArrowRight tiny={props.tiny} /> : null}{' '}
        <MenuButton
          tiny={props.tiny}
          fontSize={props.fontSize || '3rem'}
          color='white'
          onClick={props.setActiveMenu || (() => {})}
          lowOpacity={props.isHeading}
        >
          {props.title}
        </MenuButton>
      </Flex>
      {props.underline && (
        <Line width='100%' color='#a3a3a3' style={{ opacity: '0.5' }} />
      )}
    </>
  );
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  underline: PropTypes.bool,
  title: PropTypes.string,
  setActiveMenu: PropTypes.func,
  fontSize: PropTypes.string,
  tiny: PropTypes.bool,
  isHeading: PropTypes.bool
};
