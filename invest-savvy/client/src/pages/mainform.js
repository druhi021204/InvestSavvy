import logo from '../pictures/logo.png'
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useDataContext } from '../hooks/useDataContext';

const MainForm = () => {

    const { dispatch } = useDataContext()
    const { user } = useAuthContext()

    const [risk, setRisk] = useState('');
    const [timeperiod, setTimePeriod]=useState('');
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    // const{login, error, isLoading} = useLogin()


    // function validateForm() {

    //       return password.length > 0;   
    //   }

    // const handleSubmit = async (e) => {

    //     e.preventDefault();   
    //     await login( username, password);
    //     console.log(password, username );
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {risk, timeperiod}

        const response = await fetch ('/api/data', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const json = await response.json()

        if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
        }

        if(response.ok)
        {
            setRisk('')
            setTimePeriod('')
            setError(null)
            setEmptyFields([])
            dispatch({type: 'CREATE_DATA', payload: json})
        }
    }

    return ( 
        <div className="mainform">
            <img src={logo} width={70} height={50}/>
            <h2>InvestSavvy</h2>
            {/* <span role="img" aria-label="rocket">🚀</span> */}
            <form onSubmit = {handleSubmit}>
                <label>Risk Factor: </label>
                <input type="number" required placeholder="Enter the value"
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                className={emptyFields.includes('risk') ? 'error' : ''}
                />
                <pre>
                    <label>Time for Investing</label>
                    <input type="number" required placeholder="Enter the no. of years"
                    value={timeperiod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    className={emptyFields.includes('timeperiod') ? 'error' : ''}
                    />
                </pre>

                <button>Submit</button>
                {/* <button disabled={isLoading}>Submit</button>
                {error && <div className="error">{error}</div>} */}
                {error && <div className="error">{error}</div>}
                <pre></pre>
                {/* <a href = "/signup">Don't have an account?</a> */}
            </form>
        </div>
     );
}
 
export default MainForm;