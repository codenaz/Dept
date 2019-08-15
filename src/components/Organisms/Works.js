import React, { useEffect, useState } from 'react';
import { Flex } from 'reflexbox';
import Work from '../Molecules/Work';
import Filters from '../Molecules/Filter';
import { getAllWorks } from '../../mock-api/works';

export default function Works() {
  const [works, setAllworks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [selectedWork, setSelectedWork] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  useEffect(() => {
    getAllWorks().then(works => setAllworks(works));
  }, []);

  useEffect(() => {
    let allWorks = [...works];
    if (selectedIndustry && selectedIndustry.toString() !== '0') {
      allWorks = allWorks.filter(work =>
        work.industry.includes(selectedIndustry)
      );
    }
    if (selectedWork && selectedWork.toString() !== '0') {
      allWorks = allWorks.filter(work => work.category.includes(selectedWork));
    }
    setFilteredWorks(allWorks);
  }, [works, selectedIndustry, selectedWork]);

  return (
    <Flex
      flexDirection={'column'}
      width={['100%', '100%', '92%']}
      px={['1rem', '1rem', '2rem']}
    >
      <Filters
        setSelectedIndustry={setSelectedIndustry}
        setSelectedWork={setSelectedWork}
        selectedIndustry={selectedIndustry}
        selectedWork={selectedWork}
      />
      <Flex flexWrap='wrap'>
        {filteredWorks.map((work, index) => (
          <Work key={index} work={work} />
        ))}
      </Flex>
    </Flex>
  );
}
