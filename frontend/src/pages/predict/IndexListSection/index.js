import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import IndexList from '../IndexList';

const IndexListSectionWrapper = styled.section``;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 0.5rem;
`;

const SelectButton = styled.button`
  border: none;
  background-color: ${({ active, theme }) =>
    active ? theme.color.main.color[700] : theme.color.main.color[500]};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${({ theme }) => theme.color.main.color[700]};
    transition-duration: 0.5s;
  }
  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const indexes = [
  {
    name: '🇰🇷KOSPI',
    index: 'KOSPI',
  },
  {
    name: '🇰🇷KOSDAQ',
    index: 'KOSDAQ',
  },
  {
    name: '🇺🇸NASDAQ',
    index: 'NASDAQ',
  },
];

function IndexListSection() {
  const [selectedIndex, setSelectedIndex] = useState('KOSPI');

  const onChangeIndex = (index) => {
    setSelectedIndex(index);
  };

  return (
    <IndexListSectionWrapper>
      <ButtonContainer>
        {indexes.map(({ name, index }) => (
          <SelectButton
            key={name}
            onClick={() => onChangeIndex(index)}
            active={selectedIndex === index}
          >
            {name}
          </SelectButton>
        ))}
      </ButtonContainer>
      <IndexList index={selectedIndex} />
    </IndexListSectionWrapper>
  );
}

export default IndexListSection;
