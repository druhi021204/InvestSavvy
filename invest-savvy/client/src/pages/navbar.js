import { Link } from 'react-router-dom';
import logo from '../logo.png'
//to identufy that the user is logged in
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';


const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();

    const handleClick = () => {
        logout();
      }

    return ( 
        <nav className="navbar">
           {/* <div className="logo"> */}
           <img src={logo} width={70} height={50}/>
            {/* <h1>InvestSavvy</h1> */}
           {/* </div> */}
        {user && (
        <div className="links">  
            {/* <Link to="/profile"> */}
            <span>{user.username}</span> 
            {/* </Link>        */}
            <Link to = "/home">Home</Link>
            {/* <a href = "/signup">Sign Up</a> */}
            <a href = "/aboutus">About Us</a>
            <a href = "/contactus">Contact Us</a>
            <Link to = "/">
            <button onClick={handleClick}>Logout</button>
            </Link>
        </div>
        )}
        {!user && (
        <div className="links">            
            <a href = "/">Home</a>
            <a href = "/signup">Sign Up</a>
            <a href = "/aboutus">About Us</a>
            <a href = "/contactus">Contact Us</a>
        </div>
        )}
    </nav>
  );
}
 
export default Navbar;