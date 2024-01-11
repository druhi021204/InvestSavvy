import Navbar from './navbar';
import Content from './content';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import Details from './Blogdetails';
import NotFound from './Notfound';

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
