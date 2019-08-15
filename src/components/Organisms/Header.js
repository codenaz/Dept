import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'reflexbox';
import Logo from '../Atoms/Logo';
import { MenuToggle } from '../Molecules/MenuToggle';
import Line from '../Atoms/Line';
import Menu from '../Molecules/Menu';
import { black } from '../../styles/colors';

export default function Header(props) {
  const { isMenuActive, setMenuActive, isTop, setIsTop } = props;

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY < 100) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    });
  }, [setIsTop]);

  return (
    <Flex
      sx={{
        zIndex: '100',
        transition: '0.3s all linear',
        position: isMenuActive ? 'static' : 'fixed',
        opacity: isMenuActive || isTop ? 1 : 0.8
      }}
      flexDirection='column'
      bg={isMenuActive ? black : isTop ? 'transparent' : 'white'}
      color='white'
      width='100%'
    >
      <Flex px={['1rem', '2rem', '4rem', '6rem']} flexDirection='column'>
        <Flex
          alignItems={'center'}
          py={['1rem', '1.5rem', '2rem', '2.5rem']}
          as='nav'
          justifyContent='space-between'
        >
          <Box>
            <Logo menuToggled={isMenuActive} />
          </Box>
          <Box width={'40%'}>
            <MenuToggle setMenuActive={setMenuActive} />
          </Box>
        </Flex>
        <Box
          sx={{
            display: ['none', 'none', isTop ? 'flex' : 'none'],
            transition: '0.3s all linear'
          }}
          width='100%'
          justifyContent='center'
        >
          <Line width='100%' />
        </Box>
      </Flex>
      <Menu show={isMenuActive} />
    </Flex>
  );
}

Header.propTypes = {
  isMenuActive: PropTypes.bool,
  setMenuActive: PropTypes.func,
  isTop: PropTypes.bool,
  setIsTop: PropTypes.func
};
