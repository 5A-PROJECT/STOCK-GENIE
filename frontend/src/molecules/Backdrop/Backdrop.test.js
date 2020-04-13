import React from 'react';
import { render } from '@testing-library/react';
import BackDrop from '.';

const TestComponent = (loading) => render(<BackDrop loading={loading} />);

describe('<Backdrop />', () => {
  it('스냅샷과 일치해야 합니다.', () => {
    const { container } = TestComponent(true);
    expect(container).toMatchSnapshot();
  });

  it('loading = true이면 렌더링 합니다.', () => {
    const { getByTestId } = TestComponent(true);
    expect(getByTestId('backdrop')).toBeTruthy();
  });

  it('loading = false 이면 렌더링 하지 않습니다.', () => {
    const { queryByTestId } = TestComponent(false);
    expect(queryByTestId('backdrop')).toBeNull();
  });
});
