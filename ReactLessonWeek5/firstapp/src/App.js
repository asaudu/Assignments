import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Just me, learning React
        </a>
      </header>
    </div>
  );
}

export default App;
