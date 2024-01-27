import { useDataContext } from "../hooks/useDataContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect } from "react"
import { useCleanData } from "../hooks/useCleanData";


const DataDetails = () => {
    const {data, dispatch} = useDataContext()
    const {user} = useAuthContext();
    const {cleanData} = useCleanData();

    const handleClick = () => {
        cleanData();
    }
    
    useEffect ( () => {
        const fetchdata = async () => {
            const response = await fetch('/api/data/add', {
                headers: {'Authorization': `Bearer ${user.token}`}, 
            })

            const json = await response.json()

            if (response.ok)
            {
                dispatch ({type: 'GET_DATA', payload: json})
            }
        }

        if (user) {
            fetchdata()
          }
    }, [dispatch, user])
    // const handleClick = async () => {
    //     const response = await fetch('/api/data/add' + data._id)
        
    //     const json = await response.json()
    // }

    return (
        <div>
        {user && (
        <div>
            
            {data && (
        <div className="datadetails">
            <Link to = "/mainform">
            <button onClick={handleClick}>CLEAR DATA</button>
            </Link>
            <h4>Risk-Factor: {data.risk}</h4>
            <h4>Time-Period: {data.timeperiod}</h4>
            <span className="material-symbols-outlined"></span>
        </div>
        )}
        
        </div>
        )}
        </div>
    )
}

export default DataDetails


