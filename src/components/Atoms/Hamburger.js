import React from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';
import PropTypes from 'prop-types';

const HamburgerContainer = styled.span`
  cursor: pointer;
  display: block;
  position: relative;
  margin-left: 1rem;
  span {
    background: #0e0e0e;
    border-radius: 1.5px;
    content: '';
    display: block;
    height: 2px;
    position: relative;
    transition: 0.3s all;
    width: 1.5rem;
    &:not(:last-child) {
      margin-bottom: 3px;
    }
  }
  &.active {
    span {
      background: white;
      &:first-child {
        top: 1px;
        transform: rotate(45deg);
      }
      &:last-child {
        top: -4px;
        transform: rotate(-45deg);
      }
    }
  }
`;

export const HamburgerToggle = props => {
  return (
    <HamburgerContainer className={cx({ active: props.active })}>
      <span />
      <span />
    </HamburgerContainer>
  );
};

HamburgerToggle.propTypes = {
  active: PropTypes.bool
};
