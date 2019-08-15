import React, { useState } from 'react';
import { Flex } from 'reflexbox';
import { black } from '../../styles/colors';
import MenuItem from '../Atoms/MenuItem';
import PropTypes from 'prop-types';

const menuItems = [
  'Home',
  'Werk',
  'Over',
  'Diensten',
  'Partners',
  'Stories',
  'Vacatures',
  'Events',
  'Contact'
];
const languageMenu = [
  'global',
  'nederland',
  'united states',
  'ireland',
  'united kingdom',
  'deutschland',
  'schewiz'
];

const networks = ['facebook', 'twitter', 'instagram', 'linkedin'];

export default function Menu(props) {
  const [activeMenuIndex, setActiveMenu] = useState(1);
  const [activeLanguageIndex, setActiveLanguage] = useState(1);
  return (
    <Flex flexDirection='column' sx={{ position: 'relative' }}>
      <Flex
        width='100%'
        minHeight='100vh'
        flexDirection='column'
        alignItems='flex-end'
        bg={black}
        pt='2rem'
        px={['1rem', '2rem', '4rem', '6rem']}
        sx={{
          transition: '0.3s all ease-in-out',
          top: props.show ? '100%' : '-100rem',
          position: 'absolute'
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            underline={index !== menuItems.length - 1}
            key={index}
            title={item.toUpperCase()}
            active={activeMenuIndex === index}
            setActiveMenu={() => setActiveMenu(index)}
          />
        ))}
        <Flex
          flexDirection='column'
          alignItems='flex-start'
          bg={black}
          sx={{
            position: 'absolute',
            left: '5',
            top: '1',
            zIndex: '10',
            display: ['none !important', 'none !important', 'flex !important']
          }}
        >
          <MenuItem tiny isHeading title='LANDEN' />
          {languageMenu.map((item, index) => (
            <MenuItem
              tiny
              key={index}
              title={item.toUpperCase()}
              active={activeLanguageIndex === index}
              setActiveMenu={() => setActiveLanguage(index)}
            />
          ))}
        </Flex>
        <Flex
          flexDirection='column'
          alignItems='flex-start'
          bg={black}
          sx={{
            position: 'absolute',
            left: '5',
            bottom: '4',
            zIndex: '10',
            display: ['none !important', 'none !important', 'flex !important']
          }}
        >
          {networks.map((item, index) => (
            <MenuItem tiny key={index} title={item.toUpperCase()} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

Menu.propTypes = {
  show: PropTypes.bool
};
