import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Banner from "./Pages/Home/Banner/Banner";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router> */}
      <Banner></Banner>
    </div>
  );
}

export default App;
