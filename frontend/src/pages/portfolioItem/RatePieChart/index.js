import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import styled from 'styled-components';

const ChartWrapper = styled.div`
  height: 300px;
`;

function RatePieChart({ data, scheme = 'nivo' }) {
  return (
    <ChartWrapper>
      <ResponsivePie
        data={data}
        margin={{ top: 0, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme }}
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabel={(d) => `${d.id} (%)`}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 2,
            spacing: 10,
          },
        ]}
        fill={
          [
            // {
            //   match: {
            //     id: 'KRW',
            //   },
            //   id: 'lines',
            // },
          ]
        }
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            translateX: 10,
            itemWidth: 80,
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
    </ChartWrapper>
  );
}

export default RatePieChart;
