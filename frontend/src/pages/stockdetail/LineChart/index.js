import React from 'react';
import { ResponsiveLine } from '@nivo/line';

function LineChart({ data }) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 30, bottom: 50, left: 30 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      colors={{ scheme: 'dark2' }}
      pointSize={4}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={5}
      pointBorderColor={{ from: 'serieColor' }}
      enablePointLabel={true}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 20,
          translateY: 30,
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
  );
}

export default LineChart;
