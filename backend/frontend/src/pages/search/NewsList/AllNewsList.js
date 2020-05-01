import React, { useState } from 'react';
import styled from 'styled-components';
import NewsListItem from '../NewsListItem';
import { inject, observer } from 'mobx-react';

const AllNewsListWrapper = styled.div``;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 0.5rem;
`;

const SelectedButton = styled.button`
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

function AllNewsList({ newsStore }) {
  const [category, setCategory] = useState('ALL');
  const { goodNewses, badNewses, newsData } = newsStore;
  const categories = [
    {
      name: '전체',
      code: 'ALL',
    },
    {
      name: '호재 뉴스',
      code: 'GOOD',
    },
    {
      name: '악재 뉴스',
      code: 'BAD',
    },
  ];

  const onSelectCategory = (cat) => {
    setCategory(cat);
  };

  return (
    <AllNewsListWrapper>
      <ButtonContainer>
        {categories.map((cat) => (
          <SelectedButton
            key={cat.name}
            onClick={() => onSelectCategory(cat.code)}
            active={category === cat.code}
          >
            {cat.name}
          </SelectedButton>
        ))}
      </ButtonContainer>

      <NewsWrapper>
        {category === 'ALL' && (
          <>
            {newsData.newses.map((news, index) => (
              <NewsListItem key={index} news={news} />
            ))}
          </>
        )}
        {category === 'GOOD' && (
          <>
            {goodNewses.map((news, index) => (
              <NewsListItem key={index} news={news} />
            ))}
          </>
        )}
        {category === 'BAD' && (
          <>
            {badNewses.map((news, index) => (
              <NewsListItem key={index} news={news} />
            ))}
          </>
        )}
      </NewsWrapper>
    </AllNewsListWrapper>
  );
}

export default inject('newsStore')(observer(AllNewsList));
