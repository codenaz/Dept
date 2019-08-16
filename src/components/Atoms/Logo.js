import React from 'react';
import PropTypes from 'prop-types';
import Blacklogo from '../../assets/images/logo-black.png';
import Whitelogo from '../../assets/images/logo-white.png';
import styled from '@emotion/styled';

const LogoImage = styled.img`
  transition: 0.3s all ease-in-out 0.1s;
  width: 3rem;
  height: 0.9rem;
  @media (min-width: 600px) {
    width: 4.7rem;
    height: 1.3rem;
  }
  @media (min-width: 900px) {
    width: 6.25rem;
    height: 1.75rem;
  }
`;

export default function Logo(props) {
  return <LogoImage src={props.menuToggled ? Whitelogo : Blacklogo} />;
}

export function WhiteLogo() {
  return <LogoImage src={Whitelogo} />;
}

Logo.propTypes = {
  menuToggled: PropTypes.bool
};
