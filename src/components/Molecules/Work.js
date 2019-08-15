import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import { grey, darkGrey } from '../../styles/colors';

export default function Work(props) {
  const { work } = props;
  return (
    <Flex
      flexDirection='column'
      width={[1, 1, 1 / 2]}
      px={[0, 0, '1%']}
      mt={['2rem']}
    >
      {work.image && (
        <Box
          as='img'
          src={work.image}
          alt='bol'
          height={['17.8rem', '17.8rem', '32rem']}
        />
      )}
      <Box
        as='p'
        color={grey}
        fontSize={['0.87rem', '0.87rem', '1rem']}
        mb={['0.68rem']}
        mt={['1.19rem']}
      >
        {work.title}
      </Box>
      <Box
        as='p'
        color={darkGrey}
        fontSize={['1.87rem']}
        lineHeight={['2rem']}
        mr={['2.43rem']}
      >
        {work.description}
      </Box>
    </Flex>
  );
}

Work.propTypes = {
  work: PropTypes.object
};
