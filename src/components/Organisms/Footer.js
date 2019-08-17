import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'reflexbox';
import { black } from '../../styles/colors';
import { WhiteLogo } from '../Atoms/Logo';
import FooterMenuItem from '../Molecules/FooterItem';
import { ReactComponent as Facebook } from '../../assets/images/icons/facebook-logo.svg';
import { ReactComponent as Instagram } from '../../assets/images/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/images/icons/twitter.svg';

export default function Footer(props) {
  return (
    <Flex
      bg={black}
      justifyContent='space-between'
      alignItems={['flex-start', 'flex-start', 'center']}
      py='2rem'
      px='1rem'
      lineHeight='1'
      width='100%'
      sx={{
        display: props.menuIsActive ? 'none !important' : 'flex !important'
      }}
    >
      <Flex
        width={1 / 4}
        sx={{
          display: ['none !important', 'none !important', 'flex !important']
        }}
      >
        <WhiteLogo />
      </Flex>

      <Flex
        flexDirection={['column', 'column', 'row']}
        color='white'
        width={[1 / 2, 1 / 2, 1 / 3]}
        justifyContent={['flex-start', 'flex-start', 'space-between']}
      >
        <FooterMenuItem title='WORK' />
        <FooterMenuItem title='SERVICES' />
        <FooterMenuItem title='STORIES' />
        <FooterMenuItem title='ABOUT' />
        <FooterMenuItem title='CAREERS' />
        <FooterMenuItem title='CONTACT' />
      </Flex>
      <Flex
        flexDirection={['column', 'column', 'row']}
        width={[1 / 2, 1 / 2, 1 / 6]}
        alignItems={['flex-end', 'flex-end', 'center']}
      >
        <Flex
          width={[1, 1, 1 / 3]}
          justifyContent={['flex-end', 'flex-end', 'center']}
          mb={['1rem', '1rem', 0]}
        >
          <Facebook
            width='1.5rem'
            height='1.5rem'
            style={{ fill: '#ffffff' }}
          />
        </Flex>
        <Flex
          width={[1, 1, 1 / 3]}
          justifyContent={['flex-end', 'flex-end', 'center']}
          mb={['1rem', '1rem', 0]}
        >
          <Twitter width='1.5rem' height='1.5rem' style={{ fill: '#ffffff' }} />
        </Flex>
        <Flex
          width={[1, 1, 1 / 3]}
          justifyContent={['flex-end', 'flex-end', 'center']}
          mb={['1rem', '1rem', 0]}
        >
          <Instagram
            width='1.5rem'
            height='1.5rem'
            style={{ fill: '#ffffff' }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

Footer.propTypes = {
  menuIsActive: PropTypes.bool
};
