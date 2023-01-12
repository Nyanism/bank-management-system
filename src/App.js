import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Login from "./components/Pages/Login";
import Signup from "./components/Pages/Signup";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
