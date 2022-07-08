import { useNavigate } from "react-router-dom";
import { Tab, TabList } from "monday-ui-react-core";
import { ROUTES } from "./consts";
import "./navBarComponent.css";

function NavBarComponent() {
  const navigate = useNavigate();

  return (
    <TabList className="tabsList">
      {ROUTES.map(({ name, route, key }) => {
        return (
          <Tab key={key} onClick={() => navigate(route)}>
            {name}
          </Tab>
        );
      })}
    </TabList>
  );
}

export default NavBarComponent;
