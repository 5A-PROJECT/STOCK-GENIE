import React from 'react';
import PropTypes from 'prop-types';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
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

const StableIcon = styled(ArrowRightIcon)`
  color: grey;
  font-size: ${(props) => props.size};
`;

const ReturnRatioWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  min-width: 75px;
`;

const Ratio = styled.span`
  font-size: ${(props) => props.fontSize};
  margin-left: 0.3rem;
`;

function ReturnRatio({ ratio, fontSize = '1.5rem', iconSize = '1.5rem' }) {
  return (
    <ReturnRatioWrapper>
      <StylesProvider injectFirst>
        {ratio > 0 && <UpIcon size={iconSize} title="up" />}
        {ratio < 0 && <DownIcon size={iconSize} title="down" />}
        {parseFloat(ratio) === 0 && (
          <StableIcon size={iconSize} title="stable" />
        )}
      </StylesProvider>
      <Ratio fontSize={fontSize}>{ratio}%</Ratio>
    </ReturnRatioWrapper>
  );
}

ReturnRatio.propTypes = {
  ratio: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  fontSize: PropTypes.string,
  iconSize: PropTypes.string,
};

export default ReturnRatio;
