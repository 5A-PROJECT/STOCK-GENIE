import React, { useEffect } from 'react';
import axios from 'axios';

function DetailInfo({ code, country, url }) {
  useEffect(() => {
    axios
      .get(`http://localhost:8000/predict/${url}/`, {
        params: {
          code: code,
          country: country,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return <h1>hi</h1>;
}

export default DetailInfo;
