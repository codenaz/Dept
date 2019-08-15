import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Button } from '../Atoms/Button';
import { black } from '../../styles/colors';
import { HamburgerToggle } from '../Atoms/Hamburger';
import PropTypes from 'prop-types';

const MenuButton = styled(Button)`
  width: 100%;
`;

const MenuText = styled.span`
  font-size: 18px;
  line-height: 1.78;
  letter-spacing: single;
  transition: 0.3s all ease-in-out 0.1s;
  color: ${props => (props.toggled ? 'white' : black)};
  font-family: ff-good-web-pro-condensed, sans-serif;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
`;

export const MenuToggle = props => {
  const [toggled, setToggled] = useState(false);
  const { setMenuActive } = props;

  useEffect(() => {
    setMenuActive(toggled);
  }, [setMenuActive, toggled]);

  const toggle = e => {
    e.preventDefault();
    setToggled(toggleState => !toggleState);
  };

  return (
    <MenuButton onClick={toggle}>
      <MenuText menuToggled={toggled}>Menu</MenuText>
      <HamburgerToggle active={toggled} />
    </MenuButton>
  );
};

MenuToggle.propTypes = {
  setMenuActive: PropTypes.func
};
