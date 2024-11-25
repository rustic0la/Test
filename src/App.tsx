import "./styles/main.scss";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import CocktailPage from "./pages/CocktailPage";
import NotFound from "./pages/NotFound";
import { COCKTAIL_CODES } from "./constants/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to={`/${COCKTAIL_CODES[0]}`} replace />}
          />
          {COCKTAIL_CODES.map((code) => (
            <Route
              key={code}
              path={`/${code}`}
              element={<CocktailPage cocktailCode={code} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
