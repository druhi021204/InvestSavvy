// import logo from './logo.png'
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    
    const [password, setPassword] = useState('');
    const [username, setName]=useState('');

    const{login, error, isLoading} = useLogin()

    // function validateForm() {

    //     return  password.length > 0;   
    //   }

    const handleSubmit = async (e) => {

        e.preventDefault();   
        await login(username, password);
        console.log(password, username );
      };

    return ( 
        <div className="signup">
           
            
            {/* <span role="img" aria-label="rocket">🚀</span> */}
            <form onSubmit = {handleSubmit}>
                <label>Username:</label>
                <input type="text" required
                value={username}
                onChange={(e) => setName(e.target.value)}
                />
                {/* <label>Email: </label>
                <input type="email" required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /> */}
                <pre>
                    <label>Password:</label>
                    <input type="password" required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </pre>

                {/* <Link to = "/" ><button disabled={isLoading}>Submit</button></Link> */}
                <button disabled={isLoading}>Submit</button>
                {error && <div className="error">{error}</div>}
                <pre></pre>
                <a href = "/signup">Don't have an account?</a>
            </form>
        </div>
     );
}
 
export default Login;