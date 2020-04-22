import React from 'react';
import PortfolioCard from '../PortfolioCard';
import styled from 'styled-components';
import { colors } from '@material-ui/core';
import ReturnRatio from '../../../../molecules/ReturnRatio';
import MaterialChip from '../../../../atoms/Chip/MaterialChip';
import { withRouter } from 'react-router-dom';
import { useMemo } from 'react';
import TagList from '../../../../organisms/TagList';

const ItemWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin-bottom: 0.5rem;
  }

  .date {
    align-self: flex-end;
    color: ${colors.grey[400]};
    font-size: 0.7rem;
  }
`;

const TagWrapper = styled.div`
  display: flex;
`;

function PortfolioListItem(props) {
  const { id, name, created_at, tags, profits } = props.portfolio;
  const { history } = props;
  const goToPortfolio = () => {
    history.push(`portfolio/${id}`);
  };

  const formatedCreatedAt = useMemo(() => {
    return new Date(created_at).toLocaleDateString();
  }, [created_at]);

  return (
    <PortfolioCard>
      <ItemWrapper onClick={goToPortfolio}>
        <div>
          <h2 className="name">{name}</h2>
          <TagList tags={tags} slice={true} />
        </div>
        {/* TODO: 수익률 받아오는 방법 고민좀 하고, 수정해야함 */}
        {profits && profits.length > 0 ? (
          <>
            <div>
              <h4>총 수익률 </h4>
              <ReturnRatio ratio={0} />
            </div>
            <div>
              <h4>전일 대비 </h4>
              <ReturnRatio ratio={0} />
            </div>
          </>
        ) : (
          <div>종목을 추가해주세요</div>
        )}
        <div className="date">{formatedCreatedAt}</div>
      </ItemWrapper>
    </PortfolioCard>
  );
}

export default withRouter(PortfolioListItem);
