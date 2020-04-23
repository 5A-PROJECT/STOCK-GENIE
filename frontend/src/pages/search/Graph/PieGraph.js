import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

const MyResponsivePie = ({ data /* see data tab */ }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    startAngle={-48}
    // innerRadius={0.5}
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
              itemTextColor: '#000',
            },
          },
        ],
      },
    ]}
  />
);

function PieGraph() {
  const [data, setData] = useState([
    {
      id: 'good',
      label: '호재',
      value: 164,
      color: 'hsl(320, 70%, 50%)',
    },
    {
      id: 'bad',
      label: '악재',
      value: 275,
      color: 'hsl(323, 70%, 50%)',
    },
    {
      id: 'mid',
      label: '중립',
      value: 582,
      color: 'hsl(223, 70%, 50%)',
    },
  ]);
  return (
    <div style={{ height: '480px' }}>
      <MyResponsivePie data={data} />
    </div>
  );
}

export default PieGraph;
