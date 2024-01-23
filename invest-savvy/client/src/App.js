import ContentHome from "./pages/content_home";
import Navbar from "./pages/navbar";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter , Route, Routes, Navigate } from "react-router-dom";
import About from "./pages/aboutus";
import Contact from "./pages/contactus";
import HomeAfter from "./pages/HomeAfter";
import { useAuthContext } from "./hooks/useAuthContext";
import Profile from "./pages/profile";
import News from "./pages/news";
import ImageSliding from "./pages/imageSliding";

// function App() {
//   return (
//   //  <Router>
//   //   <div className="App">
//   //     <Navbar/>              

//   //     <div className="content">
        
//   //       <Switch>

//   //         <Route exact path ="/">
//   //           <ContentHome/>
//   //         </Route>

//   //         <Route path = "/login">
//   //           <Login/>
//   //         </Route>
//   //       </Switch>
//   //     </div>
//   //   </div>
//   //   </Router> 

//   <BrowserRouter>
//     <div className="App">
      
//         <Routes>
          
//             <Route
//                exact path ="/"
               
//                element={<Navbar/>}
//                element1={<ContentHome/>}
               
//             />
          
         
//             {/* <Route path = "/signup">
//               <div className="signuppage">
//                  <Navbar/>
//               </div>

//               <div className="signuppg">
//                  <Signup/>
//               </div>
              
//             </Route>

//             <Route path = "/login">
//               <div className="loginpage">
//                  <Navbar/>
//               </div>

//               <div className="loginpg">
//                  <Login/>
//               </div>
              
//             </Route>

//             <Route path = "/aboutus">
//               <div className="aboutpage">
//                  <Navbar/>
//               </div>

//               <div className="aboutpg">
//                  <About/>
//               </div>
              
//             </Route>

//             <Route path = "/contactus">
//               <div className="contactpage">
//                  <Navbar/>
//               </div>

//               <div className="contactpg">
//                  <Contact/>
//               </div>
              
//         </Route>*/}
          
//         </Routes> 
//     </div>
//     </BrowserRouter> 
//   );
// }

function App() {
  const {user} = useAuthContext();

   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/home" element={<HomeAfterPage />} />
         <Route path = "/signup"element={!user ? <Signuppage /> : <Navigate to="/home" />}/>
         <Route path="/login" element={!user ?<LoginPage /> : <Navigate to="/home" /> } />
         <Route path="/aboutus" element={<AboutUsPage />} />
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/contactus" element={<ContactUsPage />} />
       </Routes>
     </BrowserRouter>
   );
 }
 
 function HomePage() {
   return (
     <div className="homepage">
       <Navbar />
       <ContentHome />
     </div>
   );
 }

 function Signuppage() {
   return (
      <div>
      <div className="signuppage">
            <Navbar/>
       </div>

      <div className="signuppg">
            <Signup/>
      </div>
      </div>
   )
 }

 function HomeAfterPage() {
  return (
     <div className="main">
     <div className="homeafterpage">
           <Navbar/>
      </div>

     <div className="homeafterpg">
           <HomeAfter/>
           <ImageSliding/>
           <News/>
     </div>
     </div>
  )
}

function ProfilePage() {
  return (
     <div>
     <div className="signuppage">
           <Navbar/>
      </div>

     <div className="signuppg">
           <Profile/>
     </div>
     </div>
  )
}

 
 function LoginPage() {
   return (
      <div>
      <div className="loginpage">
                  <Navbar/>
               </div>

              <div className="loginpg">
                 <Login/>
              </div>
      </div>
   );
 }

 function AboutUsPage() {
   return (
      <div>
         <div className="aboutpage">
                  <Navbar/>
               </div>

               <div className="aboutpg">
                  <About/>
               </div>
      </div>
   );
 }

 function ContactUsPage() {
   return (
      <div>
         <div className="contactpage">
                <Navbar/>
         </div>

               <div className="contactpg">
                  <Contact/>
               </div>
      </div>
   );
 }

export default App;
