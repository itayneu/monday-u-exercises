import ListControls from "./components/ListControls/ListControls";
import ListItem from "./components/ListItem/ListItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="list-container">
        <h1 className="app-name">Shuki</h1>
        <ToastContainer />
        <ListControls />
        <ListItem />
      </div>
    </div>
  );
}

export default App;
