import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import TrendingDownIcon from '@material-ui/icons/TrendingDown';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core';

const UpIcon = styled(ArrowDropUpIcon)`
  color: red;
  font-size: ${(props) => props.size};
`;

const DownIcon = styled(ArrowDropDownIcon)`
  color: blue;
  font-size: ${(props) => props.size};
`;

const ReturnRatioWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Ratio = styled.span`
  font-size: ${(props) => props.fontSize};
  margin-left: 0.3rem;
`;

function ReturnRatio({ ratio, fontSize = '1.5rem', iconSize = '1.5rem' }) {
  /* // -뗄려면 이거 쓰셈
    const getPositive = (profit) => {
    if (profit < 0) {
      return -profit;
    }
    return profit;
  };

  const positiveRatio = useMemo(() => getPositive(ratio), [ratio]);  
  */

  return (
    <ReturnRatioWrapper>
      <StylesProvider injectFirst>
        {ratio > 0 ? <UpIcon size={iconSize} /> : <DownIcon size={iconSize} />}
      </StylesProvider>
      <Ratio fontSize={fontSize}>{ratio}%</Ratio>
    </ReturnRatioWrapper>
  );
}

ReturnRatio.propTypes = {
  ratio: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  iconSize: PropTypes.string,
};

export default ReturnRatio;
