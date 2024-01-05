

const Navbar = () => {
    return ( 
        <nav className="navbar">
           {/* <div className="logo"> */}
            <h1>InvestSavvy</h1>
           {/* </div> */}

        <div className="links">
            <a href = "/">Home</a>
            <a href = "/login">Sign Up</a>
            <a href = "/aboutus">About Us</a>
            <a href = "/contactus">Contact Us</a>
        </div>

        </nav>
     );
}
 
export default Navbar;