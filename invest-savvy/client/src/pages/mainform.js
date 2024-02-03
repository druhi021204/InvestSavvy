import logo from '../pictures/logo.png'
import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useDataContext } from '../hooks/useDataContext';

const MainForm = () => {

    const { dispatch } = useDataContext()
    const { user } = useAuthContext()

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [strings, setStrings]=useState('');
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

        if (!user) {
            setError('You must be logged in')
            return
          }

        const data = {startDate, endDate, strings}

        const response = await fetch ('/api/data/add', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (!response.ok) {
        setError(json.error)
        setEmptyFields(json.emptyFields)
        }

        if(response.ok)
        {
            setStartDate('')
            setEndDate('')
            setStrings('')
            setError(null)
            setEmptyFields([])
            localStorage.setItem('data', JSON.stringify(json))
            dispatch({type: 'CREATE_DATA', payload: json})
        }
    }

    return ( 
        <div className="mainform">
            <img src={logo} width={70} height={50}/>
            <h2>InvestSavvy</h2>
            {/* <span role="img" aria-label="rocket">🚀</span> */}
            <form onSubmit = {handleSubmit}>
                <label>Start-Date: </label>
                <input type="date" required placeholder="dd/mm/yyyy"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className={emptyFields.includes('startDate') ? 'error' : ''}
                />

                <label>End-Date: </label>
                <input type="date" required placeholder="dd/mm/yyyy"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className={emptyFields.includes('endDate') ? 'error' : ''}
                />

                <pre>
                    <label>Stock Market Tickers:</label>
                    <input type="text" required placeholder="Enter comma separated tickers"
                    value={strings}
                    onChange={(e) => setStrings(e.target.value)}
                    className={emptyFields.includes('strings') ? 'error' : ''}
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