import ContentHome from "./content_home";
import Navbar from "./navbar";
import Signup from "./signup";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./aboutus";
import Contact from "./contactus";

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

            <Route path = "/aboutus">
              <div className="aboutpage">
                 <Navbar/>
              </div>

              <div className="aboutpg">
                 <About/>
              </div>
              
            </Route>

            <Route path = "/contactus">
              <div className="contactpage">
                 <Navbar/>
              </div>

              <div className="contactpg">
                 <Contact/>
              </div>
              
            </Route>
          
        </Switch>
    </div>
    </Router> 
  );
}

export default App;
