import React, { useState } from 'react';
import styled from 'styled-components';
import Chart from '../Chart';
import PaginationTable from '../CompanyTable';
import { Table } from '@material-ui/core';

const MainChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 2rem 0;
`;

const SelectorWrapper = styled.div``;

const TableWrapper = styled.div``;

const categories = {
  'south korea': ['KOSPI', 'KOSDAQ'],
  // 나스닥은 저 이름으로 해야 검색가능
  'united states': ['Nasdaq'],
};

function MainChart() {
  const [nation, setNation] = useState('');
  const [category, setCategory] = useState('');

  const onNationChange = (e) => {
    setNation(e.target.value);
    setCategory('');
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <MainChartWrapper>
        {/* 셀렉터 */}
        <SelectorWrapper>
          <h2>나라 선택</h2>
          <select value={nation} onChange={onNationChange}>
            <option value="">나라를 선택하세요.</option>
            <option value="south korea">대한민국</option>
            <option value="united states">미국</option>
          </select>

          {/* 나라 선택 시에만 보이도록 */}
          {nation && (
            <>
              <h2>종목선택</h2>
              <select value={category} onChange={onCategoryChange}>
                <option value="">종목을 선택하세요.</option>
                {categories[nation].map((cat, idx) => (
                  <option value={cat} key={idx}>
                    {cat}
                  </option>
                ))}
              </select>
            </>
          )}
        </SelectorWrapper>

        {/* 차트 */}
        <Chart
          width="600"
          height="300"
          url="indices"
          params={{
            country: nation,
            name: category,
          }}
        />
      </MainChartWrapper>

      {/* 회사정보 테이블 */}
      <TableWrapper>
        <PaginationTable
          params={{
            index: category,
          }}
        />
      </TableWrapper>
    </>
  );
}

export default MainChart;
