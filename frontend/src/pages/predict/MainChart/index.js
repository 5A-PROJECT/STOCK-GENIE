import React from 'react';
import styled from 'styled-components';
import IndexList from '../IndexList';
import IndexListHeader from '../IndexListHeader';
import FaceIcon from '@material-ui/icons/Face';
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded';
import AnnouncementRoundedIcon from '@material-ui/icons/AnnouncementRounded';
import { colors } from '@material-ui/core';

const TableWrapper = styled.div`
  margin-top: 1rem;
`;

const AIicon = styled(AndroidRoundedIcon)`
  color: ${colors.grey[500]};
  align-items: center;
  margin-top: 1rem;
`;

const SayIcon = styled(AnnouncementRoundedIcon)`
  color: ${colors.grey[400]};
`;

const Div = styled.div`
  display: flex;
  margin-right: 0.5rem;
  .innerText {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

function MainChart({ name }) {
  return (
    <TableWrapper>
      <Div>
        <AIicon />
        <SayIcon />
        <h1 className="innerText">
          5AI가 예측하는 {name.toUpperCase()} TOP 30
        </h1>
      </Div>
      <IndexListHeader indx={name} />
      <IndexList index={name} />
    </TableWrapper>
  );
}

export default MainChart;
