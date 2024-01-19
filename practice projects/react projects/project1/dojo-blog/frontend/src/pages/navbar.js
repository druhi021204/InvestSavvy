import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to ="/create">New Blog</Link>
        <Link to ="/getnews">News</Link>
        <Link to ="/signup">Signup</Link>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
      </div>
    </nav>
  );
}
 
export default Navbar;