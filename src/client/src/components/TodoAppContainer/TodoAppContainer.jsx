import { Route, Routes } from "react-router-dom";
import NavBarComponent from "../NavBar/NavBarComponent";
import { ROUTES_MAPPING } from "../NavBar/consts";
import About from "../About/About";
import ListControlsConnector from "../ListControls/ListControlsConnector";
import ListContainerConnector from "../ListContainer/ListContainerConnector";

function TodoAppContainer() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route
          path={ROUTES_MAPPING.TODO_LIST}
          element={
            <div>
              <ListControlsConnector />
              <ListContainerConnector />
            </div>
          }
        />
        <Route path={ROUTES_MAPPING.ABOUT} element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default TodoAppContainer;
