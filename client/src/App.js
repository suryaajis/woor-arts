import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
