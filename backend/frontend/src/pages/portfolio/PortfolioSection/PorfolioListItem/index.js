import React from 'react';
import PortfolioCard from '../PortfolioCard';
import styled from 'styled-components';
import { colors } from '@material-ui/core';
import ReturnRatio from '../../../../molecules/ReturnRatio';
import { withRouter } from 'react-router-dom';
import { useMemo } from 'react';
import TagList from '../../../../organisms/TagList';
import DescriptionIcon from '@material-ui/icons/Description';

const DocumentIcon = styled(DescriptionIcon)`
  color: ${colors.cyan[800]};
  font-size: 2rem;
  margin-right: 1rem;
`;

const ItemWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;

  .info-containter {
    display: flex;
    align-items: center;

    .info {
      .name-tags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .name {
          font-size: 2rem;
          margin-right: 0.5rem;
        }

        .date {
          margin-top: 0.3rem;
          color: ${colors.grey[400]};
          font-size: 0.7rem;
        }
      }
    }
  }

  .profit-containter {
    justify-self: flex-end;
    align-self: center;
  }
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
        <div className="info-containter">
          <DocumentIcon />
          <div className="info">
            <div className="name-tags">
              <span className="name">{name}</span>
              {tags && <TagList tags={tags} slice={true} />}
            </div>
            <div className="date">생성일 : {formatedCreatedAt}</div>
          </div>
        </div>
        <div className="profit-containter">
          {total_ratio !== undefined && (
            <ReturnRatio
              ratio={total_ratio.toFixed(2)}
              iconSize="2rem"
              fontSize="2rem"
            />
          )}
        </div>
      </ItemWrapper>
    </PortfolioCard>
  );
}

export default withRouter(PortfolioListItem);
