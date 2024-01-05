//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContentHome from "./content_home";
import Navbar from "./navbar";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar/>

      <div className="content">
        
        <Switch>

          <Route exact path ="/">
            <ContentHome/>
          </Route>

          <Route path = "/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router> 
  );
}

export default App;
