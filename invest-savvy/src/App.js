import ContentHome from "./content_home";
import Navbar from "./navbar";
import Signup from "./signup";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  //  <Router>
  //   <div className="App">
  //     <Navbar/>              

  //     <div className="content">
        
  //       <Switch>

  //         <Route exact path ="/">
  //           <ContentHome/>
  //         </Route>

  //         <Route path = "/login">
  //           <Login/>
  //         </Route>
  //       </Switch>
  //     </div>
  //   </div>
  //   </Router> 

  <Router>
    <div className="App">
      
        <Switch>
          
            <Route exact path ="/">
            <div className="homepage">
               <Navbar/>
               <ContentHome/>
               </div>
            </Route>
          
         
            <Route path = "/signup">
              <div className="signuppage">
                 <Navbar/>
              </div>

              <div className="signuppg">
                 <Signup/>
              </div>
              
            </Route>

            <Route path = "/login">
              <div className="loginpage">
                 <Navbar/>
              </div>

              <div className="loginpg">
                 <Login/>
              </div>
              
            </Route>
          
        </Switch>
    </div>
    </Router> 
  );
}

export default App;
