import Navbar from './pages/navbar';
import Content from './pages/content';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './pages/create';
import Details from './pages/Blogdetails';
import NotFound from './pages/Notfound';
import Getnews from './pages/getnews';
import Signup from './pages/signup';
import Login from './pages/login';
// import Getnews from './Getnews';

function App() {
  
  return (
    <Router>
      <div className="App">
          <Navbar/>
          <div className="content1">
              {/* <h1>RESPECT</h1> */}
              
              <Switch>
                  <Route exact path="/">
                       <Content/>
                  </Route>

                  <Route path="/create">
                        <Create/>
                  </Route>

                  <Route path="/blogs/:id">
                        <Details/>
                  </Route>

                  <Route path="/getnews">
                        <Getnews/>
                  </Route>

                  <Route path="/signup">
                        <Signup/>
                  </Route>

                  <Route path="/login">
                        <Login/>
                  </Route>

                  <Route path='*'>
                        <NotFound/>                        
                  </Route>

              </Switch>
    
           </div>
    
      </div>
    </Router>
  );
}

export default App;
