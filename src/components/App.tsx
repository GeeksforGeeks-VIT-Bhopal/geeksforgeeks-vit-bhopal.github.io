// Components
import { useState } from "react";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";

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
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={theme}>
        <Layout>
          <Switch>
            <Route exact path="/geekweeklocal">
              <GeekWeekLocal handleTheme={handleTheme} />
            </Route>
            <Route exact path="/team">
              <Team handleTheme={handleTheme} />
            </Route>
            <Route exact path="/">
              <Home handleTheme={handleTheme} />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    </HashRouter>
  );
};

export default App;
