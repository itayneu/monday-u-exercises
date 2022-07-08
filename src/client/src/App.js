import TodoAppContainer from "./components/TodoAppContainer/TodoAppContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="list-container">
        <h1 className="app-name">Shuki</h1>
        <ToastContainer />
        <TodoAppContainer />
      </div>
    </div>
  );
}

export default App;
