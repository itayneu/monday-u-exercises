import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
  return (
    <div className="app-container">
      <div className="list-container">
        <h1 className="app-name">Shuki</h1>
        <div className="list-controls">
          <Input></Input>
          <Button
            primary={true}
            backgroundColor={"#6c6cff"}
            label={"+"}
          ></Button>
        </div>
        <ul id="list"></ul>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
