import {DataContext} from '../context/DataContext'
import { useContext } from 'react'

export const useDataContext = () => {
    const context = useContext(DataContext)

    if(!context) 
    {
        throw Error('useDataContext must be used inside an WorkoutsContextProvider')
    }

    return context
}