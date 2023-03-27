import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <Link to={"/game"}>Play a game!</Link>
      </header>
    </div>
  );
}

export default App;
