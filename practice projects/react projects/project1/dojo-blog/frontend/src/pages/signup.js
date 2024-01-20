// import logo from './logo.png'
import { useState } from "react"
import { useSignup } from "../hooks/useSignup";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setName]=useState('');

    const{signup, error, isLoading} = useSignup()

    // function validateForm() {

    //     return email.length > 0 && password.length > 0;   
    //   }

    const handleSubmit = async (e) => {

        e.preventDefault();   
        await signup(email, username, password);
        console.log(password, username ,email );
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

                <button disabled={isLoading}>Submit</button>
                {error && <div className="error">{error}</div>}
                <pre></pre>
                <a href = "/login">Already have an account?</a>
            </form>
        </div>
     );
}
 
export default Signup;