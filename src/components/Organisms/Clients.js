import React from 'react';
import { Flex, Box } from 'reflexbox';
import nivea from '../../assets/images/clients/Nivea_logo_zwart.png';
import abn from '../../assets/images/clients/ABN_logo_zwart.png';
import adidas from '../../assets/images/clients/Adidas_logo_zwart.png';
import transavia from '../../assets/images/clients/Transavia_logo_zwart.png';
import tomtom from '../../assets/images/clients/Tomtom_logo_zwart.png';
import unilever from '../../assets/images/clients/Unilever_logo_zwart.png';
import walibi from '../../assets/images/clients/Walibi_logo_zwart.png';
import pathe from '../../assets/images/clients/Pathe_logo_zwart.png';
import { ClientImage } from '../Molecules/ClientImage';

export default function Clients() {
  return (
    <>
      <Flex
        flexDirection='column'
        alignItems='center'
        width={['70%', '70%', '50%']}
      >
        <Box fontSize='1.87rem' lineHeight='1.07' mb='1rem' as='h1'>
          CLIENT
        </Box>
        <Box as='p' lineHeight='1.59' textAlign='center' fontFamily='Arial'>
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </Box>
      </Flex>
      <Flex
        flexDirection='row'
        flexWrap='wrap'
        justifyContent='center'
        alignItems='center'
        width='80%'
        pt='2rem'
      >
        <ClientImage logo={nivea} />
        <ClientImage logo={abn} />
        <ClientImage logo={adidas} />
        <ClientImage logo={tomtom} />
        <ClientImage logo={transavia} />
        <ClientImage logo={unilever} />
        <ClientImage logo={walibi} />
        <ClientImage logo={pathe} />
      </Flex>
    </>
  );
}
