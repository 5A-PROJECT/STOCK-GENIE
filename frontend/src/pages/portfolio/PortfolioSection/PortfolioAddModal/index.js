import React from 'react';
import PorfolioCard from '../PortfolioCard';
import styled from 'styled-components';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { StylesProvider } from '@material-ui/core';

const ModalWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddIcon = styled(NoteAddIcon)`
  /* color: red; */
  font-size: 3rem;
`;

const Texts = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
`;

function PortfolioAddModal(props) {
  return (
    <PorfolioCard>
      <ModalWrapper>
        <StylesProvider injectFirst>
          <AddIcon />
        </StylesProvider>
        <Texts>
          <span>포트폴리오</span>
          <span>추가</span>
        </Texts>
      </ModalWrapper>
    </PorfolioCard>
  );
}

export default PortfolioAddModal;
