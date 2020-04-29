import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useMemo } from 'react';
import SummaryContent from './SummaryContent';
import DetailContent from './DetailContent';

function StockListPanel({ stock }) {
  const { count, buy_price, current_price } = stock;

  const totalBuyingPrice = useMemo(() => {
    return buy_price * count;
  }, [buy_price, count]);

  const totalCurrentPrice = useMemo(() => {
    return current_price * count;
  }, [current_price, count]);

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <SummaryContent
          stock={stock}
          totalBuyingPrice={totalBuyingPrice}
          totalCurrentPrice={totalCurrentPrice}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <DetailContent
          stock={stock}
          totalBuyingPrice={totalBuyingPrice}
          totalCurrentPrice={totalCurrentPrice}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default StockListPanel;
