# 5A 프로젝트 프론트엔드

## 디렉토리 기본 구성 - Atomic Design

- Atoms : button / input 등 html tag 같은 최소 단위 => "스타일링 된 태그 하나" 까지 이 범주에 넣을려고 합니다.
- Molecules : icon + button 등 원자들이 결합된 그룹 => "약 두개 정도 컴포넌트가 합쳐져 있는 컴포넌트"
- Organisms : 음소거 버튼 + 아이콘 , 검색어 + 검색버튼, site title 등 분자들이 모여있는 특정 영역 (appbar 등) => 이곳 저곳 쓰이는 녀석들
- Pages : 데이터를 가지고 화면을 구성하기 위해 필요한 단위들이 모여있는 것

## REACT Guide

### 컴포넌트는 함수형 컴포넌트를 사용

많은 컴포넌트 모양이 있지만,,, 우리는 이번 프로젝트에서 가장 기본적인 함수 모양의 리액트 컴포넌트를 사용합니다.

```js
import React, { useState, useEffect } from 'react'; // 리액트 컴포넌트를 쓰려면 이건 무조건 임포트 해주세요
import axios from 'axios'; // 기타 라이브러리는 이렇게 임포트 합니다.

import OtherComponent from './OtherComponent';

function ComponentName(props) {
  // 컴포넌트 명은 대문자여야 합니다.
  // Vue의 props라고 보면 됩니다. 리액트 hooks를 사용했습니다.
  const [state, setState] = useState('default State');
  const { prop1, prop2 } = props; // 전달받은 props를 쓸 수 있습니다. 구조분해 할당 문법을 썼습니다. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  useEffect(() => {
    // Vue의 mounted() 등의 효과를 이걸 사용합니다.
    // axios 등을 이때 사용합니다.
  }, []);

  // 이벤트 핸들러 함수를 만들어줍니다. vue의 methods에 들어가는 놈이라고 보면 됩니다.
  const onClickHandler = () => {
    console.log('clicked');
  };

  return (
    <>
      <div>여기는 Vue의 template영역이라고 보면 됩니다.</div>
      <div>전달받은 / 선언한 props는 이렇게 씁니다. {state}</div>
      <button onClick={onClickHandler}>클릭</button>
      <OtherComponent /> // 다른 컴포넌트를 이렇게 쓰면 됩니다.
    </>
  );
}

export default ComponentName; // 해당 이름으로 export 해줍시다.
```

### 스타일링은 styled-components를 사용

css 클래스명 주면서 사용하기 힘들잖아요. css-in-js방식의 스타일링을 할 때입니다..

```js
import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

function ExComponent(props) {
  return <StyledH1>뭔가 스타일링 된 h1 태그가 적용됩니다.</StyledH1>;
}

export default ExComponent;
```

### 전역적인 상태들은 mobx store를 사용한다.

#### react useState

단순한 상태들은 useState를 써서 구현해도 됩니다.

```js
import React from 'react';

function Component(props) {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={onIncrease}>+1</button>
    </>
  );
}

export default Component;
```

#### mobx Store

다만 여기서도 쓰고 저기서도 쓰고 하는 상태의 경우 mobx를 통해 store를 구현하여 여기서 꺼내다 씁니다.

상태 `number`가 있는 `numberStore`라는 mobx Store를 선언했습니다.

```js
import { observable, action, decorate } from 'mobx';

export default class numberStore {
  number = 0; // state가 됩니다.

  constructor(root) {
    this.root = root; // 이부분은 그냥 그렇구나 해주세요
  }

  onIncrease = () => {
    this.number += 1; // 불변성을 지킬 필요 없이 그냥 변형시켜도 됩니다. mobx가 알아서 해쥽니다
  };
}

decorate(numberStore, {
  number: observable, // 변경될 상태들 => observable로 지정
  onIncrease: action, // observable들을 변형시키는 놈 => action으로 지정
});
```

이제 해당 컴포넌트에서 이 스토어를 쓰려면,

1. inject로 store를 가져온다. `inject('storeName')`
2. 위에서 inject가 반환한 함수에 observer로 감싼 컴포넌트를 넣어줍니다.
3. 그러면 해당 컴포넌트의 props에 store가 주입됩니다. 그걸 쓰면 됩니당.

```js
import React from 'react';
import { observer, inject } from 'mobx-react';

function Component(props) {
  const { numberStore } = props;

  return (
    <>
      <div>{numberStore.number}</div>
      <button onClick={numberStore.onIncrease}>+1</button>
    </>
  );
}

export default inject('numberStore')(observer(Component));
```

## 참고할만한 컴포넌트
