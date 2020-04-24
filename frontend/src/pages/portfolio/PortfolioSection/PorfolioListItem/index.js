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
  const { id, name, created_at, tags, total_ratio } = props.portfolio;
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
          {tags && <TagList tags={tags} slice={true} />}
        </div>
        {total_ratio && (
          <div>
            <h4>총 수익률 </h4>
            <ReturnRatio ratio={total_ratio.toFixed(2)} />
          </div>
        )}
        <div className="date">{formatedCreatedAt}</div>
      </ItemWrapper>
    </PortfolioCard>
  );
}

export default withRouter(PortfolioListItem);
