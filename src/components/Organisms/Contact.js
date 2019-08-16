import React from 'react';
import { Flex, Box } from 'reflexbox';
import { Input } from '../Atoms/Input';
import { SecondaryButton } from '../Atoms/Button';

export const Contact = () => {
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      width={'100%'}
      px={['1rem', '1rem', '2rem']}
    >
      <Flex
        lineHeight={['1.07']}
        mt={['3rem']}
        textAlign={['center', 'center', 'left']}
        fontSize={['1.8rem', '1.8rem', '3.6rem']}
        width={[1, 1, 1 / 3]}
        p={[0, 0, '3rem']}
      >
        <Box as='h4'>QUESTION? WE ARE HERE TO HELP!</Box>
      </Flex>
      <Flex
        flexDirection={['column', 'column', 'row']}
        flexWrap='wrap'
        px={['2%', '2%', '0']}
        mt={'3rem'}
        width={[1, 1, 2 / 3]}
      >
        <Flex
          mt={['1rem']}
          width={[1, 1, 1 / 2]}
          flexDirection='column'
          pr={[0, 0, '2rem']}
        >
          <label htmlFor='name'>Name</label>
          <Input name='name' id='name' />
        </Flex>
        <Flex
          mt={['1rem']}
          width={[1, 1, 1 / 2]}
          flexDirection='column'
          pr={[0, 0, '2rem']}
        >
          <label htmlFor='email'>Email</label>
          <Input name='email' id='email' />
        </Flex>
        <Flex
          mt={['1rem']}
          width={[1, 1, 1 / 2]}
          flexDirection='column'
          pr={[0, 0, '2rem']}
        >
          <label htmlFor='message'>Message</label>
          <Input height={'5rem'} name='message' id='message' />
        </Flex>
        <Flex width={1}>
          <SecondaryButton width={'30%'}>SEN</SecondaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
