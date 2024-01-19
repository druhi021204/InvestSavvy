// import logo from './logo.png'
import { useState } from "react";

const Login = () => {

    
    const [password, setPassword] = useState("");
    const [name, setName]=useState("");

    function validateForm() {

        return  password.length > 0;   
      }

    function handleSubmit(e) {

        e.preventDefault();   
      }

    return ( 
        <div className="signup">
           
            
            {/* <span role="img" aria-label="rocket">🚀</span> */}
            <form onSubmit = {handleSubmit}>
                <label>Username:</label>
                <input type="text" required
                value={name}
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

                <button disabled={!validateForm()}>Submit</button>
                <pre></pre>
                <a href = "/signup">Don't have an account?</a>
            </form>
        </div>
     );
}
 
export default Login;