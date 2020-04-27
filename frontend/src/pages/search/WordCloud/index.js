import React from 'react';
import ReactWordCloud from 'react-wordcloud';
import { inject, observer } from 'mobx-react';

const options = {
  enableTooltip: true,
  deterministic: false,
  fontSizes: [5, 60],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

function Wordcloud({ words }) {
  return (
    <div>
      <ReactWordCloud options={options} words={words} />
    </div>
  );
}

export default inject('newsStore')(observer(Wordcloud));
