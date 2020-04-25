import React, { useState } from 'react';
import PorfolioCard from '../PortfolioCard';
import styled from 'styled-components';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { StylesProvider, colors } from '@material-ui/core';
import ModalContents from './ModalContents';

const ModalWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const AddIcon = styled(NoteAddIcon)`
  font-size: 3rem;
`;

const Texts = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 0.5rem;
`;

function PortfolioAddModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PorfolioCard color={colors.indigo}>
      <ModalWrapper onClick={handleOpen}>
        <StylesProvider injectFirst>
          <AddIcon />
        </StylesProvider>
        <Texts>포트폴리오 생성</Texts>
      </ModalWrapper>
      <ModalContents open={open} onClose={handleClose}></ModalContents>
    </PorfolioCard>
  );
}

export default PortfolioAddModal;
