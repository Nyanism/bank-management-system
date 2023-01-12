import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";
import Home from "./components/Pages/Home";
import Loan from "./components/Pages/Loan";
import Update from "./components/Pages/Update";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/loan">
          <Loan />
        </Route>
        <Route exact path="/update">
          <Update />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
