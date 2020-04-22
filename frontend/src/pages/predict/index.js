import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import Chart from './Chart/index';
import Select from '../predict/Select/index';
import CompanyTable from '../predict/CompanyTable/index';

const PredictPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

const HeadDiv = styled.div`
  display: flex;
  justify-content: space-around;
  .div {
    margint-right: 2rem;
  }
`;

const MainDiv = styled.div`
  margin-top: 2rem;
`;

const MainDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

function PredictPage(props) {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  var totalToday = day + '/' + month + '/' + year;

  // 한달 전 날짜 구하기(최근 한달 날짜를 보여주기위해서)
  var monthDate = today.getTime() - 30 * 24 * 60 * 60 * 1000;
  today.setTime(monthDate);

  var monthYear = today.getFullYear();
  var monthMonth = today.getMonth() + 1;
  var monthDay = today.getDate();

  if (monthMonth < 10) {
    monthMonth = '0' + monthMonth;
  }
  if (monthDay < 10) {
    monthDay = '0' + monthDay;
  }

  var totalPast = monthDay + '/' + monthMonth + '/' + monthYear;

  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PredictPageWrapper>
        <HeadDiv>
          <div>
            <Chart
              info={{
                size: [300, 150],
                url: 'commodities/',
                params: {
                  name: 'Gold',
                  from_date: totalPast,
                  to_date: totalToday,
                },
                name_see: true,
              }}
            />
          </div>
          <div>
            <Chart
              info={{
                size: [300, 150],
                url: 'commodities/',
                params: {
                  name: 'Brent Oil',
                  from_date: totalPast,
                  to_date: totalToday,
                },
                name_see: true,
              }}
            />
          </div>
          <div>
            <Chart
              info={{
                size: [300, 150],
                url: 'commodities/',
                params: {
                  name: 'Copper',
                  from_date: totalPast,
                  to_date: totalToday,
                },
                name_see: true,
              }}
            />
          </div>
          <div>
            <Chart
              info={{
                size: [300, 150],
                url: 'currencycross/',
                params: {
                  name: 'USD/KRW',
                  from_date: totalPast,
                  to_date: totalToday,
                },
                name_see: true,
              }}
            />
          </div>
        </HeadDiv>
        <MainDiv2>
          <MainDiv>
            <Select />
          </MainDiv>
          <MainDiv>
            <Chart
              info={{
                size: [700, 300],
                url: 'indices/',
                params: {
                  name: 'KOSPI',
                  from_date: totalPast,
                  to_date: totalToday,
                  country: 'south korea',
                },
                name_see: false,
              }}
            />
          </MainDiv>
        </MainDiv2>
        <CompanyTable />
      </PredictPageWrapper>
    </AccessProtection>
  );
}

export default PredictPage;
