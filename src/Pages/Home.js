import React, { useState } from 'react';
import Header from '../components/Organisms/Header';
import { Flex } from 'reflexbox';
import Hero from '../components/Organisms/Hero';
import Works from '../components/Organisms/Works';
import Clients from '../components/Organisms/Clients';
import { lightGrey } from '../styles/colors';
import { Contact } from '../components/Organisms/Contact';
import Footer from '../components/Organisms/Footer';

export default function Home() {
  const [menuIsActive, setMenuActive] = useState(false);
  const [isTop, setIsTop] = useState(true);
  return (
    <Flex width='100%' flexDirection='column'>
      <Flex
        width='100%'
        flex='1'
        flexDirection='column'
        pb={['0', '0', '1%']}
        pt={[['0', '0', isTop ? '1%' : '0']]}
        px={['0', '0', '1%']}
        sx={{ transition: '0.3s all linear' }}
      >
        <Flex
          flexDirection='column'
          sx={{
            position: ['static', 'static', 'relative']
          }}
          height={['25.6rem', '50.6rem', '60rem']}
        >
          <Header
            isMenuActive={menuIsActive}
            setMenuActive={setMenuActive}
            isTop={isTop}
            setIsTop={setIsTop}
          />
          <Hero menuIsActive={menuIsActive} />
        </Flex>
        <Flex
          sx={{ display: menuIsActive ? 'none !important' : 'flex !important' }}
          flexDirection='column'
          alignItems={'center'}
        >
          <Works />
          <Flex
            width='100%'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            bg={lightGrey}
            py={['3.4rem']}
            mt='2rem'
          >
            <Clients />
            <Contact />
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
