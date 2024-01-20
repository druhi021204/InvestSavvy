import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
//to identufy that the user is logged in
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {

  const {user} = useAuthContext();
  const {logout} = useLogout();

  const handleClick = () => {
    logout();
  }
    return(
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      {user && (
      <div className="links">
        <span>{user.username}</span>
        <Link to="/">Home</Link>
        <Link to ="/create">New Blog</Link>
        <Link to ="/getnews">News</Link>        
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
        <button onClick={handleClick}>Logout</button>
      </div>
      )}
      {!user && (
      <div className="links">
        <Link to="/">Home</Link>
        <Link to ="/create">New Blog</Link>
        <Link to ="/getnews">News</Link>
        <Link to ="/signup">Signup</Link>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
      </div>
      )}
    </nav>
  );
}
 
export default Navbar;