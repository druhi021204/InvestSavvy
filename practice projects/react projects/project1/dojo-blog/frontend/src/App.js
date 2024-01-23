import Navbar from './pages/navbar';
import Content from './pages/content';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Create from './pages/create';
import Details from './pages/Blogdetails';
import NotFound from './pages/Notfound';
import Getnews from './pages/getnews';
import Signup from './pages/signup';
import Login from './pages/login';
import { useAuthContext } from './hooks/useAuthContext';
// import Getnews from './Getnews';

function App() {
  
      const {user} = useAuthContext();

  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
          <div className="content1">
              {/* <h1>RESPECT</h1> */}
              
              <Routes>
                  {/* <Route exact path="/">
                       <Content/>
                  </Route> */}

                  <Route 
                         exact path="/"
                        element={<Content/>}
                  />

                  <Route 
                        path="/create"
                        element={<Create/>}
                  />

                  <Route 
                        path="/blogs/:id"
                        element={<Details/>}
                  />

                  <Route 
                        path="/getnews"
                        element={<Getnews/>}
                  />

                  <Route 
                        path="/signup"
                        element={!user ? <Signup/> : <Navigate to="/" />}
                  />

                  <Route 
                        path="/login"
                        element={!user ? <Login/> : <Navigate to="/" />}
                  />

                  <Route 
                        path='*'
                        element={<NotFound/>}                        
                  />

              </Routes>
    
           </div>
    
      </div>
    </BrowserRouter>
  );
}

export default App;
