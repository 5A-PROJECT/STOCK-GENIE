import React from 'react';
import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line';
import { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

const ChartWarpper = styled.div`
  display: center;
  margin-bottom: 2rem;
  height: 400px;
`;

function DetailChart({ stock, predictStore }) {
  const {
    getStockRealAndPredictData,
    stockRealAndPredictFormatedData,
  } = predictStore;
  useEffect(() => {
    getStockRealAndPredictData();
  }, [getStockRealAndPredictData]);
  console.log(stockRealAndPredictFormatedData);
  return (
    <ChartWarpper>
      <ResponsiveLine
        data={stockRealAndPredictFormatedData}
        xFormat="time:%Y-%m-%d"
        margin={{ top: 50, right: 30, bottom: 100, left: 60 }}
        xScale={{
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day',
        }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 2 days',
          tickRotation: -50,
          legend: 'time scale',
          legendOffset: -12,
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 100,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </ChartWarpper>
  );
}

export default inject('predictStore')(observer(DetailChart));
