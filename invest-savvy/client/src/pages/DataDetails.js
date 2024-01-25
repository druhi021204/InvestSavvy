import { useDataContext } from "../hooks/useDataContext";
// import { useAuthContext } from "../hooks/useAuthContext";

// import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const DataDetails = ({data}) => {
    const {dispatch} = useDataContext()
    // const {user} = useAuthContext
    
    const handleClick = async () => {
        const response = await fetch('/api/data' + data._id)
        const json = await response.json()
    }

    return (
        <div className="datadetails">
            <h4>{data.risk}</h4>
            <h4>{data.timeperiod}</h4>
            <span className="material-symbols-outlined" onClick={handleClick}></span>
        </div>
    )
}

export default DataDetails