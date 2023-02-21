import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { StarportCarrier, Starport } from '..';

describe('test options', () => {
  test('local configuration should work', async () => {
    const App = () => {
      const [flag, setFlag] = useState(false);
      return (
        <StarportCarrier easing="ease-in">
          {flag && (
            <Starport port="1">
              <button data-testid="btn" onClick={() => setFlag(!flag)}>
                toggle
              </button>
            </Starport>
          )}
          {!flag && (
            <Starport port="1">
              <button data-testid="btn" onClick={() => setFlag(!flag)}>
                toggle
              </button>
            </Starport>
          )}
        </StarportCarrier>
      );
    };

    const { container } = render(<App />);
    const btn = screen.getByTestId('btn');
    fireEvent(btn, new MouseEvent('click', { bubbles: true }));
    // eslint-disable-next-line
    const el = container.querySelector('.starport-craft') as HTMLElement;
    expect(el.style.transitionTimingFunction).toBe('ease-in');
  });

  test('global configuration should work', async () => {
    const App = () => {
      const [flag, setFlag] = useState(false);
      return (
        <StarportCarrier>
          {flag && (
            <Starport port="1" easing="ease-in">
              <button data-testid="btn" onClick={() => setFlag(!flag)}>
                toggle
              </button>
            </Starport>
          )}
          {!flag && (
            <Starport port="1">
              <button data-testid="btn" onClick={() => setFlag(!flag)}>
                toggle
              </button>
            </Starport>
          )}
        </StarportCarrier>
      );
    };

    const { container } = render(<App />);
    const btn = screen.getByTestId('btn');
    fireEvent(btn, new MouseEvent('click', { bubbles: true }));
    // eslint-disable-next-line
    const el = container.querySelector('.starport-craft') as HTMLElement;
    expect(el.style.transitionTimingFunction).toBe('ease-in');
  });

  test('local configuration should cover the global', async () => {
    const App = () => {
      const [flag, setFlag] = useState(false);
      return (
        <StarportCarrier easing="ease-in">
          {flag && (
            <Starport port="1" easing="ease-out">
              <button data-testid="btn" onClick={() => setFlag(!flag)}>
                toggle
              </button>
            </Starport>
          )}
          {!flag && (
            <Starport port="1">
              <button data-testid="btn" onClick={() => setFlag(!flag)}>
                toggle
              </button>
            </Starport>
          )}
        </StarportCarrier>
      );
    };

    const { container } = render(<App />);
    const btn = screen.getByTestId('btn');
    fireEvent(btn, new MouseEvent('click', { bubbles: true }));
    // eslint-disable-next-line
    const el = container.querySelector('.starport-craft') as HTMLElement;
    expect(el.style.transitionTimingFunction).toBe('ease-out');
  });
});
