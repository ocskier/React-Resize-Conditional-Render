import logo from './logo.svg';
import { useState, useEffect } from 'react';

import { useDebounceScreenWidth } from './utils/debounceScreenWidth';

import './App.css';

function App() {
  const [width, setWidth] = useState(document.body.clientWidth);
  const debouncedWidth = useDebounceScreenWidth(width);
  useEffect(() => {
    const runResize = () => setWidth(document.body.clientWidth);
    window.addEventListener('resize', runResize);
  }, []);
  return (
    <div className="App">
      {debouncedWidth > 800 && (
        <>
          <h2>Desktop</h2>
          <p>{`Shrink the screen size to see the magic <======|`}</p>
        </>
      )}
      {debouncedWidth < 800 && (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
    </div>
  );
}

export default App;
