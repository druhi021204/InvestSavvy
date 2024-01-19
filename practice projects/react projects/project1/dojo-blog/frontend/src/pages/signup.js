// import logo from './logo.png'
import { useState } from "react";

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName]=useState("");

    function validateForm() {

        return email.length > 0 && password.length > 0;   
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
                <label>Email: </label>
                <input type="email" required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <pre>
                    <label>Password:</label>
                    <input type="password" required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </pre>

                <button disabled={!validateForm()}>Submit</button>
                <pre></pre>
                <a href = "/login">Already have an account?</a>
            </form>
        </div>
     );
}
 
export default Signup;