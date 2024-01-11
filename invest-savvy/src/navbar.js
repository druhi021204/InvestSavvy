import logo from './logo.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
           {/* <div className="logo"> */}
           <img src={logo} width={70} height={50}/>
            {/* <h1>InvestSavvy</h1> */}
           {/* </div> */}

        <div className="links">
            <a href = "/">Home</a>
            <a href = "/signup">Sign Up</a>
            <a href = "/aboutus">About Us</a>
            <a href = "/contactus">Contact Us</a>
        </div>

        </nav>
     );
}
 
export default Navbar;