import { fireEvent, render, screen } from '@testing-library/react';
import { StarportCarrier, Starport } from '..';

const mockHandleWrapperClick = jest.fn();

const Demo = () => {
  const handleWrapperClick = mockHandleWrapperClick;

  return (
    <StarportCarrier>
      <div onClick={handleWrapperClick}>
        <Starport port="1">
          <button data-testid="btn">Btn</button>
        </Starport>
      </div>
    </StarportCarrier>
  );
};

test('wrapper event should be fired when click starport content', () => {
  render(<Demo />);
  const btn = screen.getByTestId('btn');
  fireEvent(btn, new MouseEvent('click', { bubbles: true }));
  expect(mockHandleWrapperClick.mock.calls).toHaveLength(1);
});
