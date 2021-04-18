import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [width, setWidth] = useState(document.body.clientWidth);
  useEffect(() => {
    const runResize = () => setWidth(document.body.clientWidth);
    window.addEventListener('resize', runResize);
    // :exploding_head:
  }, []);
  return (
    <div className="App">
      {width > 800 && <p>Desktop</p>}
      {width < 800 && (
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
