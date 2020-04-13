import React from 'react';
import { render } from '@testing-library/react';
import ReturnRatio from '.';

const Sample = (ratio) => render(<ReturnRatio ratio={ratio} />);

describe('<ReturnRatio />', () => {
  it('스냅샷과 일치해야 합니다.', () => {
    const { container } = Sample('3.5');
    expect(container).toMatchSnapshot();
  });
  it('음수 수익률은 DownIcon과 -{ratio}% 가 렌더링 되어야 합니다.', () => {
    const { getByText, getByTitle } = Sample('-3.5');
    getByTitle('down');
    getByText('-3.5%');
  });
  it('양수 수익률은 UpIcon 과 {ratio}% 가 렌더링 되어야 합니다.', () => {
    const { getByText, getByTitle } = Sample('55.5');
    getByTitle('up');
    getByText('55.5%');
  });
});
