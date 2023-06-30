import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DynamicComponent from './DynamicComponent';

const ApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/hello');
      const jsonData = await response.json();
      setData(jsonData.spotlights);
      console.log('Data fetched:', jsonData.spotlights);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <ApiComponentWrapper>
      <DynamicComponent data={data} />
    </ApiComponentWrapper>
  );
};

const ApiComponentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default ApiComponent;
