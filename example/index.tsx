import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import usePrefersColorScheme from '../.';


function Example() {
  const colorScheme = usePrefersColorScheme();
  return (
    <div>
      <p>Color Scheme: {colorScheme}</p>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
