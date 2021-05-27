import { BrowserRouter, Route, Switch } from "react-router-dom";

//importing pages
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Project} path="/project" />
        <Route component={Contact} path="/contact" />
        <Route component={Update} path="/update" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
