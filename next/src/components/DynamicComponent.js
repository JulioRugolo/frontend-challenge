import React from 'react';
import styled from 'styled-components';

const DynamicComponent = ({ data }) => {
  if (!data) {
    return null; // ou uma mensagem de carregamento, caso deseje
  }

  return (
    <DynamicComponentWrapper>
      {data.map((item) => (
        <Item key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <ItemImage src={item.image} alt={item.title} />
        </Item>
      ))}
    </DynamicComponentWrapper>
  );
};

const DynamicComponentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`;

const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

export default DynamicComponent;
