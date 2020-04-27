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

function Wordcloud(props) {
  const { wordData } = props.newsStore;
  console.log('wordcloud');
  console.log(wordData);
  const keys = Object.keys(wordData);
  console.log(keys);

  let wordList = [];
  for (let i = 0; i < keys.length; i++) {
    wordList.push({
      text: keys[i],
      value: wordData[keys[i]],
    });
  }
  console.log(wordList);
  return (
    <div>
      <ReactWordCloud options={options} words={wordList} />
    </div>
  );
}

export default inject('newsStore')(observer(Wordcloud));
