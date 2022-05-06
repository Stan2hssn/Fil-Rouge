import {Link} from 'react-router-dom'
import './style.scss'

function Home() {
  return (
    <div className="App-header">
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
        <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
