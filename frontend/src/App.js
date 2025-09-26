import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const handleMakeRequest = () => {
    console.log('Make Request');
    axios.get('api/testWithCurrentUser').then(response => {
      console.log({response});
    })
  };

  return (
    <div className="App">
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
      <button onClick={handleMakeRequest}>Make request API</button>
    </div>
  );
}

export default App;
