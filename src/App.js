// src/App.js

import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { deepMerge } from "grommet/utils";
import HomePage from "./HomePage";
import SavingsCalculator from "./calculators/savings/SavingsCalculator";
import BudgetCalculator from "./calculators/budget/BudgetCalculator";
import CompoundCalculator from "./calculators/compound/CompoundCalculator";
import ErrorPage from "./error-page";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Your custom styles
import "./calculators/calculators.css";
import Home from "./pages/Home";
import { Grommet, grommet } from "grommet";
import { themeOne } from "./theme-one";

const theme = deepMerge(grommet, themeOne);

// Define your routes
const routes = [
  { path: "/", exact: true, component: Home },
  //{ path: "/savings-calculator", component: SavingsCalculator },
  //{ path: "/compound-calculator", component: CompoundCalculator },
  //{ path: "/budget-calculator", component: BudgetCalculator },
  { path: "/home", component: Home },
  // Add a catch-all route for unknown paths
  { component: ErrorPage },
];

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <Switch>
          {routes.map(({ path, component, exact }, index) => (
            <Route
              key={index}
              path={path}
              component={component}
              exact={exact}
            />
          ))}
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
