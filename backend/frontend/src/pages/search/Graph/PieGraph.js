import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { observer, inject } from 'mobx-react';

const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 10, right: 80, bottom: 80, left: 80 }}
    radialLabelsTextColor="#333333"
    radialLabelsLinkStrokeWidth={2}
    radialLabelsLinkColor={{ from: 'color' }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    startAngle={-48}
    innerRadius={0.4}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: 'category10' }}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    legends={[
      {
        anchor: 'bottom',
        direction: 'row',
        translateY: 56,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: '#999',
        symbolSize: 18,
        symbolShape: 'circle',
        effects: [
          {
            on: 'hover',
            style: {
              itemTextColor: '#999',
            },
          },
        ],
      },
    ]}
  />
);

function PieGraph({ newsStore }) {
  const { goodBadData } = newsStore;
  return (
    <div style={{ height: '480px' }}>
      <MyResponsivePie data={goodBadData} />
    </div>
  );
}

export default inject('newsStore')(observer(PieGraph));
