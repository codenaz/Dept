import React from 'react';
import { Flex, Box } from 'reflexbox';
import heroImage from '../../assets/images/florensis.png';
import { black } from '../../styles/colors';
import { PrimaryButton } from '../Atoms/Button';

export default function Hero(props) {
  return (
    !props.menuIsActive && (
      <Flex width='100%' flexDirection='column' alignItems='center'>
        <Flex
          width='100%'
          height={['15rem', '40rem', '58rem']}
          justifyContent={['center', 'center', 'flex-start']}
          alignItems='center'
          mt={['15%', '15%', '0']}
          sx={{
            background: `rgba(57,57,57,1) url(${heroImage})`,
            backgroundSize: ['28rem', 'cover'],
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            position: ['static', 'static', 'absolute'],
            top: 0
          }}
        >
          <Flex
            alignItems='center'
            justifyContent={['center', 'center', 'flex-start']}
            ml={[0, 0, '5rem']}
            height={['10.6rem', '10.6rem', '20rem']}
            width={['21rem', '21rem', '50rem']}
          >
            <Box sx={{ color: black, fontSize: ['10.6rem', '15rem', '20rem'] }}>
              WORK
            </Box>
          </Flex>
        </Flex>
        <Box
          sx={{
            zIndex: 10,
            position: ['static', 'static', 'absolute'],
            top: 800,
            right: 100
          }}
        >
          <PrimaryButton width={['21rem']}>VIEW CASE</PrimaryButton>
        </Box>
      </Flex>
    )
  );
}
