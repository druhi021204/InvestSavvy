import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {

        return email.length > 0 && password.length > 0;   
      }

    function handleSubmit(e) {

        e.preventDefault();   
      }

    return ( 
        <div className="login">
            <h2>Login/Sign Up to Begin <span role="img" aria-label="rocket">🚀</span></h2>
            <form onSubmit = {handleSubmit}>
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
            </form>
        </div>
     );
}
 
export default Login;