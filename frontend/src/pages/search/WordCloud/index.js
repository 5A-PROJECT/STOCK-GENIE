import React, { useState, useEffect } from 'react';
import ReactWordCloud from 'react-wordcloud';
import words from './words';
import axios from 'axios';
import { inject, observer } from 'mobx-react';
import { BASE_URL } from '../../../constants';

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
  const { getNews } = props.newsStore;
  console.log(getNews);
  const { words } = getNews.words;
  console.log(words);
  let wordList = [];
  for (let i = 0; i < words.length; i++) {
    wordList.push({
      text: words.keys()[i],
      value: words[words.keys()[i]],
    });
  }
  return (
    <div>
      <ReactWordCloud options={options} words={wordList} />
    </div>
  );
}

export default inject('newsStore')(observer(Wordcloud));
