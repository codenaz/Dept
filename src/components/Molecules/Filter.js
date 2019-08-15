import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'reflexbox';
import DropDown from './DropDown';
import { workCategories, industryCategories } from '../../constants';

export default function Filters(props) {
  return (
    <Flex
      alignSelf={['flex-start', 'flex-start', 'flex-end']}
      flexDirection={['column', 'column', 'row']}
      justifyContent={['flex-start', 'flex-start', 'flex-end']}
      mb={['1.25rem', '1.25rem', '2.5rem']}
    >
      <DropDown
        label='Show me'
        value={props.selectedWork}
        onSelect={props.setSelectedWork}
        options={workCategories}
      />
      <DropDown
        value={props.selectedIndustry}
        onSelect={props.setSelectedIndustry}
        label='in'
        options={industryCategories}
      />
    </Flex>
  );
}

Filters.propTypes = {
  selectedIndustry: PropTypes.any,
  selectedWork: PropTypes.any,
  setSelectedWork: PropTypes.func,
  setSelectedIndustry: PropTypes.func
};
