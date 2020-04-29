import React, { useState } from 'react';
import styled from 'styled-components';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ModalContents from './ModalContents';
import MaterialButton from '../../../atoms/Button/MaterialButton';

const ModalButton = styled(MaterialButton)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddIcon = styled(ShowChartIcon)`
  color: white;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

function StockAddModal({ update = false, stock = null }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ModalButton onClick={handleOpen}>
        {update ? (
          <span>수정</span>
        ) : (
          <>
            <AddIcon />
            <span>종목 추가</span>
          </>
        )}
      </ModalButton>
      <ModalContents
        open={open}
        onClose={handleClose}
        update={update}
        stock={stock}
      />
    </>
  );
}

export default StockAddModal;
