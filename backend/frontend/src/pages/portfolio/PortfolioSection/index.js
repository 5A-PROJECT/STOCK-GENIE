import React from 'react';
import PortfolioList from './PortfolioList';
import styled from 'styled-components';

const PortfolioSectionWrapper = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

function PortfolioSection(props) {
  return (
    <PortfolioSectionWrapper>
      <Title>나의 포트폴리오</Title>
      <PortfolioList />
    </PortfolioSectionWrapper>
  );
}

export default PortfolioSection;
