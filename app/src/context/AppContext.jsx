import { createContext, useRef, useState } from "react";
import { getDateDiffInYMD } from "../utils/helpers"

export const AppContext = createContext()

function useDate()
{

    const [errorDay, setErrorDay] = useState(false);
    const [errorMonth, setErrorMonth] = useState(false);
    const [errorYear, setErrorYear] = useState(false);
    const [errorDate, setErrorDate] = useState(false);
    
    const dayRef =  useRef('00')
    const monthRef =  useRef('00')
    const yearRef =  useRef('0000')

    const [numberDays,setNumberDays] = useState('00')
    const [numberMonths,setNumberMonths] = useState('00')
    const [numberYears,setNumberYears] = useState('00')

    const handleDay = value => 
    {   
        if(!/^[0-9]{2}/.test(value)){
            setErrorDay(true)
            return;
        }
        
        if(value==='00'){
            setErrorDay(true)
            return;
        }
        
        if(parseInt(value)<0){
            setErrorDay(true)
            return;
        }
        
        if(parseInt(value)>31){
            setErrorDay(true)
            return;
        }
       
        dayRef.current = value;
        setErrorDay(false)
        handleDate()
        return;
    }

    const handleMonth = value => {

        if(!/^[0-9]{2}/.test(value)){
            setErrorMonth(true)
            return
        }
        
        if(value==='00'){
            setErrorMonth(true)
            return
        }
        
        if(parseInt(value)<0){
            setErrorMonth(true)
            return
        }
        
        if(parseInt(value)>12){
            setErrorMonth(true)
            return
        }

        monthRef.current = value;
        setErrorMonth(false)
        handleDate()        
        return;
    }

    const handleYear = value => {
        if(!/^[0-9]{4}/.test(value)){
            setErrorYear(true)
            return
        }
        
        if(value==='0000'){
            setErrorYear(true)
            return
        }
        
        if(parseInt(value)<0){
            setErrorYear(true)
            return
        }
        
        if(parseInt(value)>new Date().getFullYear()){
            setErrorYear(true)
            return
        }

        yearRef.current = value;
        setErrorYear(false)
        handleDate()        
        return;
    }

    const handleDate = () => {
        const lastDayOfMonth = new Date(yearRef.current,monthRef.current,0).getDate()
        if(dayRef.current>lastDayOfMonth){            
            setErrorDate(true)
            return;
        }

        const startDate = new Date(yearRef.current,monthRef.current,dayRef.current);
        const endDate = new Date();
        
        const {years,months, days} = getDateDiffInYMD(startDate, endDate)
        
        setNumberDays(days)
        setNumberMonths(months)
        setNumberYears(years)
        
        setErrorDate(false)       
    }


    
    return {
        handleDay , errorDay ,
        handleMonth, errorMonth ,
        handleYear, errorYear ,
        errorDate ,
        numberDays, numberMonths, numberYears
    }
}

export function AppProvider({ children })
{
    const {
        handleDay , errorDay ,
        handleMonth , errorMonth ,
        handleYear, errorYear ,
        errorDate ,
        numberDays, numberMonths, numberYears
    } = useDate()

    return (
        <AppContext.Provider
            value={{
                handleDay , errorDay ,
                handleMonth , errorMonth ,
                handleYear, errorYear ,
                errorDate ,
                numberDays, numberMonths, numberYears
            }}
        >
            {children}
        </AppContext.Provider>
    )
}