import React from 'react';

function Main() {
  // 선택한 값에 따라 옵션을 다르게 설정하기
  function categoryChange(e) {
    var korea = ['KOSPI', 'KOSDAQ'];
    var usa = ['NASDAQ'];
    var target = document.getElementById('stock');

    if (e.target.value === 'pick1') {
      var lists = korea;
    } else if (e.target.value === 'pick2') {
      var lists = usa;
    }
    target.length = 1;

    for (var x in lists) {
      var opt = document.createElement('option');
      opt.value = lists[x];
      opt.innerHTML = lists[x];
      target.appendChild(opt);
    }
  }

  //   const check = useRef();
  return (
    <>
      <h2>나라 선택</h2>
      <select onChange={categoryChange}>
        <option value="pick0">나라를 선택해주세요</option>
        <option value="pick1">대한민국</option>
        <option value="pick2">미국</option>
      </select>

      <h2>종목선택</h2>
      <select name="selectbox" id="stock">
        <option>조회할 종목을 선택해주세요</option>
      </select>
    </>
  );
}

export default Main;
