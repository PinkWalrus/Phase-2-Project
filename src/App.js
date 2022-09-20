import Home from "./components/Home";
import RandomRecipe from "./components/RandomRecipe";
import Recipe from "./components/Recipe";
import DishType from "./components/DishType";
import Search from "./components/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* HOME */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* RANDOM RECIPE */}
          <Route exact path="/recipe">
            <RandomRecipe />
          </Route>
          {/* RECIPE WITH ID */}
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          {/* RECIPE CUISINE */}
          <Route exact path="/dishType/">
            <DishType />
          </Route>
          {/* RECIPE CUISINE */}
          <Route path="/dishType/:type">
            <DishType />
          </Route>
          {/* SEARCHED RECIPE */}
          <Route path="/search/:search">
            <Search />
          </Route>
          {/* REDIRECT TO HOME */}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
