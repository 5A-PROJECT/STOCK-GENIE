import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 10, right: 60, bottom: 80, left: 80 }}
    radialLabelsTextColor="#333333"
    radialLabelsLinkStrokeWidth={2}
    radialLabelsLinkColor={{ from: 'color' }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor="#333333"
    startAngle={-48}
    innerRadius={0.4}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: 'nivo' }}
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

function PieGraph(news) {
  const [data] = useState([
    {
      id: 'good',
      label: '호재',
      value: news.news[0].good,
      color: 'hsl(99, 70%, 50%)',
    },
    {
      id: 'bad',
      label: '악재',
      value: news.news[0].bad,
      color: 'hsl(323, 70%, 50%)',
    },
  ]);
  return (
    <div style={{ height: '480px' }}>
      <MyResponsivePie data={data} />
    </div>
  );
}

export default PieGraph;
