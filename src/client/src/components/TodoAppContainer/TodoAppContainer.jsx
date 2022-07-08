import { Route, Routes } from "react-router-dom";
import NavBarComponent from "../NavBar/NavBarComponent";
import { ROUTES_MAPPING } from "../NavBar/consts";
import AboutComponent from "../About/AboutComponent";
import ListControls from "../ListControls/ListControls";
import ListItem from "../ListItem/ListItem";

function TodoAppContainer() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route
          path={ROUTES_MAPPING.TODO_LIST}
          element={
            <div>
              <ListControls />
              <ListItem />
            </div>
          }
        />
        <Route path={ROUTES_MAPPING.ABOUT} element={<AboutComponent />} />
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
