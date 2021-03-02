// Components
import { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import GeekWeekLocal from "./pages/GeekWeekLocal";
import Layout from "./Layout";
import Navbar from "./Navbar";

type ThemeType = "dark" | "light";

const App = () => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <div className={theme}>
        <Layout>
          <Navbar handleTheme={handleTheme} />
          <Switch>
            <Route path="/geekweeklocal">
              <GeekWeekLocal />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
