import { createContext, useRef, useState } from "react";

export const AppContext = createContext()

const regExp = /^\d+$/


function useDate()
{
    // * THIS CALCULATE THE YEARS, MONTH AND YEARS 😁
    // TODO : CHECK THE VALIDATIONS 🤔
    // ! WARNING: DON'T VALIDATE IF THE DATE IS A VALID DATE LIKE 1991-04-31 (THIS DATE DON'T HAVE 31 DAYS) 😫

    const [day, setDay] = useState()    
    const [dayError, setDayError] = useState(false) 
    const [month, setMonth] = useState()
    const [monthError, setMonthError] = useState(false)
    const [year, setYear] = useState()
    const [yearError, setYearError] = useState(false)

    const [numberOfYear, setNumberOfYears] = useState(0)
    const [numberOfMonths, setNumberOfMonths] = useState(0)
    const [numberOfDays, setNumberOfDays] = useState(0)
    
    const previousYear = useRef(year)
    const previousMonth = useRef(month)
    const previousDay = useRef(day)

    const prevYearError = useRef(yearError)
    const prevMonthError = useRef(monthError)
    const prevDayError = useRef(dayError)

    const handleDay = value => {
        if(value!=='')
        {        
            if(regExp.test(value))
            {
                previousDay.current = value
                if(value<32){
                    setDay(value)
                    handleFullDate()
                    setDayError(false)     
                    prevDayError.current = false;               
                }else{
                    setDayError(true)    
                    prevDayError.current = true;    
                }
                
            }else{
                setDayError(true)
                prevDayError.current = true;    
            }
        }else
        {            
            setDayError(false)
            prevDayError.current = true;    
        }
    }

    const handleMonth = value => {
        if(value!=='')
        {
            if(regExp.test(value)){
                previousMonth.current = value
                if(value<13){
                    setMonth(value)
                    handleFullDate()                    
                    setMonthError(false)
                    prevMonthError.current = false;
                }else{
                    setMonthError(true)
                    prevMonthError.current = true;
                }
            }else{
                setMonth('')
                setMonthError(true)
                prevMonthError.current = true;
            }        
        }else
        {            
            setMonthError(false)
            prevMonthError.current = true;
        }

    }

    const handleYear = value => {
        const currentYear = new Date().getFullYear()        
        if(value!=='')
        {
            if(regExp.test(value)){
                previousYear.current = value
                if(value<currentYear){
                    
                    setYear(value)
                    handleFullDate()
                    setYearError(false)
                    prevYearError.current = false;
                }else{
                    setYearError(true)
                    prevYearError.current = true;
                }
            }else{
                setYear('')
                setYearError(false)
                prevYearError.current = true;
            }        
        }else
        {            
            setYearError(false)
            prevYearError.current = true;
        }

    }  

    const handleFullDate = () => {
        const currenDate = new Date()

        console.log(new Date(previousYear.current,(previousMonth.current+1),previousDay.current).getDate())

        if(/^\d{4}$/.test(previousYear.current) && /^\d{2}$/.test(previousMonth.current) && /^\d{2}$/.test(previousDay.current)){
            const nYears = Math.abs(previousYear.current - currenDate.getFullYear())      
            setNumberOfYears(nYears)         

            const nMonths = (currenDate.getMonth()+1)-month
            setNumberOfMonths(nMonths)

            const nDays = (new Date().getDate())-day
            setNumberOfDays(nDays)             
        }else{
            setNumberOfYears(0)  
            setNumberOfMonths(0)  
            setNumberOfDays(0) 
        }

    }

    return {dayError, handleDay, day, monthError, handleMonth ,month,yearError, handleYear, year, numberOfDays, numberOfMonths, numberOfYear}
}

export function AppProvider({ children })
{
    const {dayError, handleDay, day, monthError, handleMonth, month, yearError, handleYear, year, numberOfDays, numberOfMonths, numberOfYear} = useDate()

    return (
        <AppContext.Provider
            value={{
                dayError, handleDay , day ,
                monthError, handleMonth , month , 
                yearError, handleYear, year ,
                numberOfDays, numberOfMonths, numberOfYear
            }}
        >
            {children}
        </AppContext.Provider>
    )
}