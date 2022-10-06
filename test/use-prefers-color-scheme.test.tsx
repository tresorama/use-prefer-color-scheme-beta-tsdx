import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';
import ReactTestRenderer from 'react-test-renderer';
import usePrefersColorScheme from '../src/use-prefers-color-scheme';

function Test() {
  const colorScheme = usePrefersColorScheme();
  return (
    <div>
      <p>Color Scheme: {colorScheme}</p>
    </div>
  );
}

describe('usePrefersColorScheme - no DOM', () => {
  it('should return "no-preference" as first value for preferred color scheme', () => {
    const { result } = renderHook(() => usePrefersColorScheme());
    expect(result.current).toBe('no-preference');
  });
});

describe('usePrefersColorScheme - DOM - with ReactDOM', () => {
  // init the React DOM container
  const container = document.createElement('div');
  const root = ReactDOM.createRoot(container);

  it('test component renders without crashing', () => {
    // Test first render and componentDidMount
    act(() => {
      root.render(<Test />);
    });
  });

  it('test component has expected hook return value', () => {
    // Test first render and componentDidMount
    act(() => {
      root.render(<Test />);
    });
    // Check if UI reflect expected values
    const label = container.querySelector('p');
    if (!label) throw new Error('Dom Node not present');
    expect(label.textContent).toBe(`Color Scheme: no-preference`);
  });
});

describe('usePrefersColorScheme - DOM - with ReactTestRenderer', () => {
  it('test component renders without crashing', () => {
    const renderer = ReactTestRenderer.create(<Test />);
    const compData = renderer.toJSON();
    console.log(compData);
  });
});
